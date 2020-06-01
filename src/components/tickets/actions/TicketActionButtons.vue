<template>
  <div class="q-mx-md q-mb-xl bg-grey-2 text-center shadow-5">
    <!-- Utiliser des floating action buttons pour les variantes des boutons action ? (question équipe/client) -->
    <q-btn
      v-for="action in actionsButtons"
      :key="action.id"
      class="q-ma-md shadow-3"
      color="light-green-5"
      :label="action.label"
      :disable="!action.isEnabled"
      @click="action.actionFunction"
    />
    <rrr-resolve-popup :ticketToResolve="ticket" />
    <rrr-waiting-popup :ticketWaiting="ticket" />
  </div>
</template>

<script>
import ResolveTicketDialog from 'components/tickets/actions/ResolveTicketDialog.vue'
import WaitingTicketDialog from 'components/tickets/actions/WaitingTicketDialog.vue'
import actionEvents from '../../../scripts/tickets/ticketActionEvents.js'

export default {
  name: 'TicketActionButtons',
  components: {
    'rrr-resolve-popup': ResolveTicketDialog,
    'rrr-waiting-popup': WaitingTicketDialog
  },

  props: {
    ticket: {
      type: Object,
      required: true
    }
  },

  created () {
    // écoute l'évènement "prendre en charge ticket" par l'utilisateur courant
    actionEvents.eventManager.$on(actionEvents.takeInChargeTicketEvent, () => {
      this.ticket.inCharge = 'Utilisateur'
      this.ticket.status = 'En cours'
      this.ticket.solution = ''
      actionEvents.eventManager.$emit(actionEvents.updateActionButtonsEnablingEvent)
    })

    // écoute l'évènement pour mettre à jour la propriété isEnabled de toutes les actions
    // TODO : améliorer cette méthode car code trop spécifique
    actionEvents.eventManager.$on(actionEvents.updateActionButtonsEnablingEvent, () => {      
      this.actionsButtons.forEach(a => a.isEnabled = this.isTicketInChargeByUser())

      // pour l'action "prendre en charge", isEnabled est spécifique
      this.actionsButtons.find(a => a.id == 1).isEnabled = !this.isTicketInChargeByUser()
    })
  },

  methods: {
    // indique si le ticket est pris en charge par l'utilisateur courant
    isTicketInChargeByUser: function () {
      return this.ticket.status != 'Résolu' && this.ticket.status != 'En attente' && this.ticket.inCharge == 'Utilisateur'
    }
  },

  data () {
    return {
      actionsButtons: [
        {          
          id: 1,
          label: 'Prendre en charge',
          isEnabled: !this.isTicketInChargeByUser(),
          actionFunction: () => { actionEvents.eventManager.$emit(actionEvents.takeInChargeTicketEvent) }
        },
        {
          id: 2,
          label: 'Résoudre ticket',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { actionEvents.eventManager.$emit(actionEvents.resolveTicketEvent) }
        },
        {
          id: 3,
          label: 'Poser une question au client',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { alert('Cette fonctionnalité n\'est pas disponible dans la démo') }
        },
        {
          id: 4,
          label: 'Poser une question à un équipier',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { alert('Cette fonctionnalité n\'est pas disponible dans la démo') }
        },
        {
          id: 5,
          label: 'Mettre en attente',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { actionEvents.eventManager.$emit(actionEvents.waitingTicketEvent) }
        },
      ]
    }
  }  
}
</script>