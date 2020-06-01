<template>
  <div>
    <div class="text-center bg-grey-2 q-ma-md shadow-5">
      <p class="text-h5 q-py-sm">Cartes actives</p>
      <div class="row no-wrap justify-around q-py-md items-center">
        <rrr-active-card-area
          v-for="n in 3"
          :key="n"
          dataTransferName="cardId"
          :preFilledCard="preFilledActiveCards[n-1]"
          cardTypeConstraint="challenge"
        />
        <p class="text-uppercase text-center text-subtitle1"
           style="max-width:120px"
        >
          Déposez vos cartes disponibles dans les emplacements libres
        </p>
        <rrr-active-card-area
          v-for="n in [4, 5, 6]"
          :key="n"
          dataTransferName="cardId"
          :preFilledCard="preFilledActiveCards[n-1]"
          cardTypeConstraint="bonus"
        />
      </div>
      <div class="row no-wrap">
        <p class="col-5 text-subtitle1 text-uppercase q-pa-md">Cartes défi</p>
        <div class="col" />
        <p class="col-5 text-subtitle1 text-uppercase q-pa-md">Cartes bonus</p>
      </div>
    </div>
    <div class="text-center bg-grey-2 q-mx-md shadow-2">
      <p class="text-h5 q-py-sm">Cartes disponibles</p>
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        animated
        control-color="green-5"
        padding
        arrows
        height="250px"
        class="bg-grey-2"
      >
        <!-- remplit le caroussel avec les images des cartes disponibles -->
        <q-carousel-slide
          v-for="slide, slideIndex in availableCardsInSlides"
          :name="slideIndex"
          class="row items-center justify-center no-wrap"
        >          
          <q-img
            v-for="card in slide"
            :key="card.id"
            :id="card.id"
            class="rounded-borders q-mx-md"
            :src="card.imageSource"
            width="130px"
            @click="openCardDetail(card)"   
            draggable="true"       
            @dragstart="onDragCardStart"  
          />
        </q-carousel-slide>      
      </q-carousel>
      <!-- sélection du nombre de cartes à afficher par slide  -->
      <div class="row justify-end">
        <div class="col-11" />
        <div class="col">
          <q-select
            borderless dense
            v-model="cardsPerSlide"
            :options="[3, 4, 5, 6, 7]"
            options-dense options-cover
            @input="availableCardsInSlides = getAvailableCardsInSlides()"
          />
          <q-tooltip
            content-class="shadow-4"
            content-style="font-size: 12px"
            transition-show="scale"
            transition-hide="scale"
          >
            Nombre de cartes à afficher par slide
          </q-tooltip>
        </div>
      </div>      
    </div>    
  </div>
</template>

<script>
import Cards from '../../data/cards.js'
import cardEvents from '../../scripts/cards/cardEvents.js'
import DnDCardArea from 'components/cards/DragNDropCardArea.vue'

export default {
  name: 'CardsDashboard',
  components: {
    'rrr-active-card-area': DnDCardArea
  },

  data () {
    return {
      // slide du caroussel actuellement affiché 
      slide: 0,
      // combien de cartes on affiche par slide du caroussel
      cardsPerSlide: 5,
      // toutes les cartes disponibles (non actives)    
      availableCards: [],
      // toutes les cartes dispos mais découpées par paquet de x cartes pour les afficher par slide dans le caroussel
      // x étant la variable cardsPerSlide
      availableCardsInSlides: [],
      // cartes déjà actives à l'arrivée sur la page
      preFilledActiveCards: []
    }
  },

  created () {
    // écoute l'évènement comme quoi une carte a été déposée dans une zone carte active
    cardEvents.eventManager.$on(cardEvents.cardDroppedInArea, (cardDropped) => {
      this.removeAvailableCard(cardDropped)
      cardEvents.eventManager.$emit(cardEvents.activeCardsUpdated)
    });

    cardEvents.eventManager.$on(cardEvents.cardRemovedFromArea, (cardRemoved) => {
      this.addAvailableCard(cardRemoved)
      cardEvents.eventManager.$emit(cardEvents.activeCardsUpdated)
    });

    // initialisation des données de la page
    this.preFilledActiveCards = this.getPreFilledActiveCards()
    this.availableCardsInSlides = this.getAvailableCardsInSlides()
  },

  computed: {    
    // retourne le nombre de slides à générer dans le caroussel pour afficher toutes les cartes
    carouselSlidesCount: function () {
      return Math.ceil(this.availableCards.length / this.cardsPerSlide)
    }
  },

  methods: {
    openCardDetail: function (card) {
      // prévient le gestionnaire d'évènement d'ouvrir la popup "détail carte" pour la carte fournie en paramètre
      cardEvents.eventManager.$emit(cardEvents.openDialogEventName, card)
    },

    // Obtient la liste des cartes disponibles
    getAvailableCards: function () {
      return Cards.challengesCards.filter(c => c.isActive === false).concat(
        Cards.bonusCards.filter(c => c.isActive === false))
    },

    // obtient la liste des cartes disponibles regroupées par slide
    getAvailableCardsInSlides: function () {
      var cardsInSlides = []
      this.availableCards = this.getAvailableCards()

      // remplit chaque slide avec le nombre de cartes souhaitées par slide
      for (let slide = 1; slide <= this.carouselSlidesCount; slide++) {
        cardsInSlides.push(this.availableCards.slice(this.cardsPerSlide * (slide - 1), this.cardsPerSlide * slide))
      }

      // si le slide sélectionné dans le caroussel est hors de la liste des nouveaux slides, repositionne au premier slide
      if (this.slide > cardsInSlides.length - 1) {
        this.slide = 0
      }

      return cardsInSlides
    },

    // retire la carte donnée en paramètre des cartes disponibles
    removeAvailableCard: function (cardToRemove) {
      cardToRemove.isActive = true
      this.availableCards.splice(this.availableCards.indexOf(cardToRemove), 1)

      // détermine dans quel slide la carte à retirer se trouve
      var slideContainingCardIndex = this.availableCardsInSlides.findIndex(slide => slide.includes(cardToRemove))

      if (slideContainingCardIndex !== -1) {
        // retire la carte de la slide
        this.availableCardsInSlides[slideContainingCardIndex].splice(this.availableCardsInSlides[slideContainingCardIndex].indexOf(cardToRemove), 1)
      }
    },

    // ajoute une carte dans la liste des cartes disponibles
    addAvailableCard: function (cardToAdd) {
      cardToAdd.isActive = false
      this.availableCards.push(cardToAdd)
      // rajoute la carte dans le slide actuel, pour avoir une confirmation visuelle que la carte s'ajoute
      this.availableCardsInSlides[this.slide].push(cardToAdd)
    },

    // mémorise l'id html de la carte que l'on déplace
    onDragCardStart (e) {
      e.dataTransfer.setData('cardId', e.target.id)
      e.dataTransfer.dropEffect = 'move'
    },

    // fournit les cartes déjà actives avant toute interaction sur la page
    // ce sera sous la forme d'un tableau figé de 6 cases (3 premières pour les défis, 3 suivants pour les bonus)
    getPreFilledActiveCards: function () {
      var preFilledCards = Array(6)

      var cc = Cards.challengesCards.filter(c => c.isActive === true)
      var bc = Cards.bonusCards.filter(c => c.isActive === true)

      // 3 premières cartes : cartes défi
      for (let n = 0; n < 3; n++) {
        preFilledCards[n] = cc[n] ?  cc[n] : {}
      }

      // 3 dernières cartes : cartes bonus
      for (let n = 3, m = 0; n < 6; n++) {
        preFilledCards[n] = bc[m] ?  bc[m] : {}
        m++
      }

      return preFilledCards
    }
  }
}
</script>

<style scoped lang="sass">
.drop-target
  height: 300px
  width: 200px
  min-width: 200px
  background-color: gainsboro

.drag-enter
  outline-style: dashed

.box
  width: 100px
  height: 100px
  float: left
  cursor: pointer

.box:nth-child(3)
  clear: both

.navy
  background-color: navy

.red
  background-color: firebrick

.green
  background-color: darkgreen

.orange
  background-color: orange
</style>