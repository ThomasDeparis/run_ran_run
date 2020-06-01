<template>
  <div>
    <q-tab-panels 
      v-model="activeTab" 
      animated 
      vertical
      class="bg-green-5"
    >
      <q-tab-panel name="none" class="bg-green-5 q-pa-xs" />
      <q-tab-panel name="cards" class="bg-green-5 q-pt-xl">
        <div class="row">
          <p class="card-title q-pa-md">Défis actifs</p>
            <!-- affiche les cartes défi actives -->
            <q-img
              v-for="card in activeChallengesCards"
              :key="card.id"
              :src="card.imageSource" 
              class="q-mx-xs card"
              @click="openCardDetail(card)"
            >
              <q-tooltip
                content-class="shadow-4"
                content-style="font-size: 12px"
                transition-show="scale"
                transition-hide="scale"
              >
                {{ card.description }}
              </q-tooltip>
            </q-img>
        
          <p class="card-title q-pa-md">Bonus actifs</p>
          <!-- affiche les cartes bonus actives -->
          <q-img
            v-for="card in activeBonusCards"
            :key="card.id"
            :src="card.imageSource"
            class="q-mx-xs card"
            @click="openCardDetail(card)"
          >
            <q-tooltip
              content-class="shadow-4"
              content-style="font-size: 12px"
              transition-show="scale"
              transition-hide="scale"
            >
              {{ card.description }}
            </q-tooltip>
          </q-img>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import Cards from 'src/data/cards.js'
import cardEvents from '../../scripts/cards/cardEvents.js'

export default {
  name: 'ActiveCardsPanel',
  props: {
    showBonus: Boolean 
  },

  data () {
    return {
      activeChallengesCards: [],
      activeBonusCards: []
    }
  },

  created () {
    // surveille la mise à jour des cartes actives
    cardEvents.eventManager.$on(cardEvents.activeCardsUpdated, () => {
      this.activeChallengesCards = this.getActiveChallengesCards()
      this.activeBonusCards = this.getActiveBonusCards()
    });

    // à l'initialisation du panel : récupère les cartes actives
    this.activeChallengesCards = this.getActiveChallengesCards()
    this.activeBonusCards = this.getActiveBonusCards()
  },

  computed: {
    activeTab: function () {
      return this.showBonus ? 'cards' : 'none'
    }
  },

  methods: {
    openCardDetail: function (card) {
      // prévient le gestionnaire d'évènement d'ouvrir la popup "détail carte" pour la carte fournie en paramètre
      cardEvents.eventManager.$emit(cardEvents.openDialogEventName, card)
    },

    getActiveChallengesCards: function () {
      return Cards.challengesCards.filter(c => c.isActive === true)
    },
    getActiveBonusCards: function () {
      return Cards.bonusCards.filter(c => c.isActive === true)
    }
  }
}
</script>

<style scoped>
  .card {
    width: 90px;
  }

  .card-title {
    text-transform: uppercase;
    font-weight: 500;
    margin: 0 10px 0 50px;
  }

  div .row {
    display: ruby
  }
</style>