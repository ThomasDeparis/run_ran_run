<template>
  <div>
  <!-- div de la zone de dépose de carte : elle affiche la carte ou une zone de dépôt  -->
    <template class="row">
      <q-img 
        v-if="cardInArea.id != undefined"
        :src="cardInArea.imageSource"
        :class="areaClasses"
        @click="openCardDetail"
      />
      <div v-else
        @dragenter="onDragEnter"
        @dragleave="onDragLeave"
        @dragover="onDragOver"
        @drop="onDrop"
        :class="areaClasses"
      />
    </template>
    <div class="row items-center">
      <div class="col" />
      <q-btn
        class="col-8 q-mt-md shadow-3"
        color="light-green-5"
        label="RETIRER"
        :disable="cardInArea.id == undefined"
        @click="removeCardFromArea"
      />
      <div class="col" />
    </div>
  </div>
</template>

<script>
import cards from '../../data/cards.js'
import cardEvents from '../../scripts/cards/cardEvents.js'

export default {
  name: 'DragNDropCardArea',
  data () {
    return {
      cardInArea: {}
    }
  },

  props: {
    // nom de la donnée à récupérer durant le drag'n'drop
    dataTransferName: {
      type: String,
      required: true
    },
    // carte fournie pour pré-remplir la zone
    preFilledCard: {
      type: Object
    },
    // contrainte sur le type de carte qui peut être déposée dans la zone
    cardTypeConstraint: {
      type: String,
      default: ''
    }
  },

  created () {
    // initialisation : pré-remplit la zone avec la carte fournie
    if (this.preFilledCard && Object.keys(this.preFilledCard).length > 0) {
      this.cardInArea = this.preFilledCard
    }
  },

  computed: {
     areaClasses: function () {
       return 'area rounded-borders overflow-hidden no-wrap ' + (Object.keys(this.cardInArea).length === 0 ? 'empty-area' : '')
     }
  },

  methods: {   
    openCardDetail: function () {
      // prévient le gestionnaire d'évènement d'ouvrir la popup "détail carte" pour la carte fournie en paramètre
      cardEvents.eventManager.$emit(cardEvents.openDialogEventName, this.cardInArea)
    },

    removeCardFromArea: function () {
      this.$q.notify({
        message: 'Carte remise dans vos cartes disponibles !',
        color: 'green-5',
        position: 'bottom'
      })
      cardEvents.eventManager.$emit(cardEvents.cardRemovedFromArea, this.cardInArea)
      this.cardInArea = {}
    },

    onDragEnter (e) {
      // don't drop on other draggables
      if (e.target.draggable !== true) {
        e.target.classList.add('drag-enter')
      }
    },

    onDragLeave (e) {
      e.target.classList.remove('drag-enter')
    },

    onDragOver (e) {
      e.preventDefault()
    },

    onDrop (e) {
      e.preventDefault()

      // on ne peut pas placer la carte sur une zone "draggable"
      if (e.target.draggable === true) {
        return
      }

      var droppedCardId = e.dataTransfer.getData(this.dataTransferName)      
      var droppedEl = document.getElementById(droppedCardId)

      if (droppedEl != null) {
        var droppedCard = cards.challengesCards.find(c => c.id == droppedCardId)
        var cardType = ''
        if (droppedCard) {
          cardType = 'challenge'          
        }
        else {
          droppedCard = cards.bonusCards.find(c => c.id == droppedCardId)          
          cardType = 'bonus'
        }

        // la carte a été retrouvée dans les cartes connues
        // la rend active et la stocke en tant que carte dans la zone
        if (droppedCard) {

          // vérifie que la carte déposée soit du bon type
          if (this.cardTypeConstraint !== '' && cardType !== this.cardTypeConstraint) {
            // notifie l'utilisateur que la carte n'est pas du bon type
            this.$q.notify({
              message: 'La carte déposée n\'est pas du bon type',
              color: 'red',
              position: 'bottom'
            })

            e.target.classList.remove('drag-enter')
            return
          }
          else {
            this.cardInArea = droppedCard
            // prévient par évènement que la carte a bie été réceptionnée dans la zone
            cardEvents.eventManager.$emit(cardEvents.cardDroppedInArea, droppedCard)

            // retire la carte (en tout cas la balise div de la carte) de l'emplacement d'origine
            droppedEl.parentNode.removeChild(droppedEl)
            e.target.appendChild(droppedEl)            
          }
        }

        // cas où la carte est replacée d'où elle provient
        if (droppedEl.parentNode === e.target) {
          return
        } 
      }
      e.target.classList.remove('drag-enter')
    }
  }
}
</script>

<style scoped lang="sass">
.area
  height: 200px
  width: 130px

.empty-area
  background-color: #cacbcc
  outline-style: dashed

.drag-enter
  background-color: green

.box
  width: 100px
  height: 100px
  float: left
  cursor: pointer

.box:nth-child(3)
  clear: both
</style>