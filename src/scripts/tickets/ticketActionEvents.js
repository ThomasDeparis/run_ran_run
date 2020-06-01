import Vue from 'vue'

const eventManager = new Vue()

export default {
  // gestionnaire d'évènement global pour les actions sur les tickets
  eventManager,
  // nom de l'évènement pour ouvrir la popup de résolution d'un ticket
  resolveTicketEvent: 'resolveTicketEvent',
  // nom de l'évènement pour prendre en charge un ticket
  takeInChargeTicketEvent: 'takeInChargeTicketEvent',
  // nom de l'évènement pour prendre mettre en attente un ticket
  waitingTicketEvent: 'waitingTicketEvent',
  // nom de l'évènement pour mettre à jour les boutons d'action d'un ticket
  updateActionButtonsEnablingEvent: 'updateActionButtonsEnablingEvent',
  // nom de l'évènement de notification comme quoi l'utilisateur a validé la popup TicketActionDialog
  notifyDialogValidationEvent: 'notifyDialogValidationEvent'
}