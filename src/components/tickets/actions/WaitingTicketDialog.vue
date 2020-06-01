<template>
  <rrr-action-dialog
    :actionEvent="actionEvent"
    :dialogTitle="title"
    validateButtonLabel="Mettre en attente"
    textInputPlaceholder="Commentaire / raison"   
  />
</template>

<script>
import actionEvents from '../../../scripts/tickets/ticketActionEvents'
import TicketActionDialog from 'components/tickets/actions/TicketActionDialog.vue'

export default {
  name:'WaitingTicketDialog',
  components: {
    'rrr-action-dialog': TicketActionDialog
  },
  data () {
    return {
      ticket: this.ticketWaiting,
      // fournit le nom de l'évènement pour résoudre le ticket
      actionEvent: actionEvents.waitingTicketEvent
    }
  },
  computed: {
    title: function () {
      return 'Mettre en attente le ticket numéro ' + this.ticket.id
    }  
  },
  props: {
    ticketWaiting: {
      type: Object,
      required: true
    }
  },

  created () {
    // écoute l'évènement de notif comme quoi l'user a validé le dialog
    actionEvents.eventManager.$on(actionEvents.notifyDialogValidationEvent, (eventSource, textInput) => {
      if(eventSource === actionEvents.waitingTicketEvent) {
        this.setTicketWaiting(textInput)
      }
    });
  },

  methods: {
    setTicketWaiting: function (waitingComment) {      
      this.ticket.status = 'En attente'
      this.ticket.solution = waitingComment
      actionEvents.eventManager.$emit(actionEvents.updateActionButtonsEnablingEvent)
    }
  }
}
</script>