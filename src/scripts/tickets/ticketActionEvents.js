import Vue from 'vue'

const eventManager = new Vue()

export default {
  // gestionnaire d'évènement global pour les actions sur les tickets
  eventManager,
  // nom de l'évènement pour ouvrir la popup de résolution d'un ticket
  openDialogResolveTicket: 'openDialogResolveTicket',
  // nom de l'évènement pour prendre en charge un ticket
  takeInChargeTicket: 'takeInChargeTicket',
  // nom de l'évènement pour mettre à jour les boutons d'action d'un ticket
  updateActionButtonsEnabling: 'updateActionButtonsEnabling'
}