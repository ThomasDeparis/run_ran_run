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
    <rrr-resolve-popup />
  </div>
</template>

<script>
import ResolveTicketDialog from 'components/Tickets/ResolveTicketDialog'
import actionEvents from '../../scripts/tickets/ticketActionEvents.js'

export default {
  name: 'TicketActionButtons',
  components: {
    'rrr-resolve-popup': ResolveTicketDialog
  },

  props: {
    ticket: {
      type: Object,
      required: true
    }
  },

  created () {
    // écoute l'évènement "prendre en charge ticket" par l'utilisateur courant
    actionEvents.eventManager.$on(actionEvents.takeInChargeTicket, () => {
      this.ticket.inCharge = 'Utilisateur'
      this.ticket.status = 'En cours'
      this.ticket.solution = ''
      actionEvents.eventManager.$emit(actionEvents.updateActionButtonsEnabling)
    })

    // écoute l'évènement pour mettre à jour la propriété isEnabled de toutes les actions
    actionEvents.eventManager.$on(actionEvents.updateActionButtonsEnabling, () => {
      // TODO : améliorer cette méthode car code trop spécifique
      this.actionsButtons.forEach(a => a.isEnabled = this.isTicketInChargeByUser())

      // pour l'action "prendre en charge", isEnabled est spécifique
      this.actionsButtons.find(a => a.id == 1).isEnabled = !this.isTicketInChargeByUser()
    })
  },

  methods: {
    // indique si le ticket est pris en charge par l'utilisateur courant
    isTicketInChargeByUser: function () {
      return this.ticket.status != 'Résolu' && this.ticket.inCharge == 'Utilisateur'
    }
  },

  data () {
    return {
      actionsButtons: [
        {          
          id: 1,
          label: 'Prendre en charge',
          isVisible: !this.isTicketInChargeByUser(),
          isEnabled: !this.isTicketInChargeByUser(),
          actionFunction: () => { actionEvents.eventManager.$emit(actionEvents.takeInChargeTicket) }
        },
        {
          id: 2,
          label: 'Résoudre ticket',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { actionEvents.eventManager.$emit(actionEvents.openDialogResolveTicket, this.ticket) }
        },
        {
          id: 3,
          label: 'Poser une question au client',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
        {
          id: 4,
          label: 'Poser une question à un équipier',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
        {
          id: 5,
          label: 'Mettre en attente',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
      ]
    }
  }  
}
</script>