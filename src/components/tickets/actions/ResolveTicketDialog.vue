<template>
  <rrr-action-dialog
    :actionEvent="actionEvent"
    :dialogTitle="title"
    validateButtonLabel="Résoudre"
    textInputPlaceholder="Solution / conclusion"   
  />
</template>

<script>
import actionEvents from '../../../scripts/tickets/ticketActionEvents'
import TicketActionDialog from 'components/tickets/actions/TicketActionDialog.vue'

export default {
  name:'ResolveTicketDialog',
  components: {
    'rrr-action-dialog': TicketActionDialog
  },
  data () {
    return {
      ticket: this.ticketToResolve,
      // fournit le nom de l'évènement pour résoudre le ticket
      actionEvent: actionEvents.resolveTicketEvent
    }
  },
  computed: {
    title: function () {
      return 'Résoudre ticket numéro ' + this.ticket.id
    }  
  },
  props: {
    ticketToResolve: {
      type: Object,
      required: true
    }
  },

  created () {
    // écoute l'évènement de notif comme quoi l'user a validé le dialog
    actionEvents.eventManager.$on(actionEvents.notifyDialogValidationEvent, (eventSource, textInput) => {
      if(eventSource === actionEvents.resolveTicketEvent) {
        this.resolveTicket(textInput)
      }
    });
  },

  methods: {
    resolveTicket: function (solutionInput) {
      if(solutionInput != '') {
        this.ticket.status = 'Résolu'
        this.ticket.solution = solutionInput
        actionEvents.eventManager.$emit(actionEvents.updateActionButtonsEnablingEvent)
      }  
    }
  }
}
</script>