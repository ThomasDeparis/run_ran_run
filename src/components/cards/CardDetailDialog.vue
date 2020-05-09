<template>
  <q-dialog v-model="showDialog" position="bottom">
    <q-card class="card">
      <div class="q-pa-md bg-green-5">
        <img :src="card.imageSource" />
      </div>        
        <q-card-section style="text-align:justify;">  
          {{ card.description }}
        </q-card-section>
      </q-card>
  </q-dialog>
</template>

<script>
import cardEvents from '../../scripts/cards/cardEvents.js'

export default {
  name: 'CardDetailDialog',

  data () {
    return {
      showDialog: false,
      // objet "carte" défi ou bonus à afficher dans la popup
      card: {
        imageSource: String,
        description: String
      }
    }
  },

  created () {
    // écoute l'évènement d'ouverture de popup pour afficher le détail de la carte fournie
    cardEvents.eventManager.$on(cardEvents.openDialogEventName, (cardToShow) => {
      this.card = cardToShow;
      this.showDialog = true;
    });
  }
}
</script>

<style scoped>
  .card {
    width: 300px;
    text-align: center;
  }
</style>