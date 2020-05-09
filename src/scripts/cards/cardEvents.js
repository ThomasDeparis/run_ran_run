import Vue from 'vue'

const eventManager = new Vue()

export default {
  // gestionnaire d'évènement global pour la popup de détail d'une carte défi ou bonus
  eventManager,
  // nom de l'évènement pour ouvrir la popup de détail d'une carte défi ou bonus
  openDialogEventName: 'openCardDetailDialog'
}