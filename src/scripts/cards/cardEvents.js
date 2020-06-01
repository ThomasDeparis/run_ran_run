import Vue from 'vue'

const eventManager = new Vue()

export default {
  // gestionnaire d'évènement global pour la popup de détail d'une carte défi ou bonus
  eventManager,
  // nom de l'évènement pour ouvrir la popup de détail d'une carte défi ou bonus
  openDialogEventName: 'openCardDetailDialog',
  // nom de l'évènement qui indique que la carte en cours de drag'n'drop a été déposée dans une cardArea
  cardDroppedInArea: 'cardDroppedInArea',
  // nom de l'évènement qui indique qu'une carte d'une cardArea a été retirée
  cardRemovedFromArea: 'cardRemovedFromArea'
}