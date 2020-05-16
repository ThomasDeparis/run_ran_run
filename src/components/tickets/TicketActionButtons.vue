<template>
  <div class="q-mx-md q-mb-xl bg-grey-2 text-center shadow-5">
    <!-- Utiliser des floating action buttons pour les variantes des boutons action ? (question équipe/client) -->
    <q-btn
      v-for="action in actionsButtons"
      :key="action.label"
      class="q-ma-md shadow-3"
      color="light-green-5"
      :label="action.label"
      :disable="!action.isEnabled"
      @click="action.actionFunction"
    />
  </div>
</template>

<script>
export default {
  name: 'TicketActionButtons',
  props: {
    ticket: {
      type: Object,
      required: true
    }
  },
  methods: {
    // indique si le ticket est pris en charge par l'utilisateur courant
    isTicketInChargeByUser: function () {
      return this.ticket.state != 'Résolu' && this.ticket.inCharge == 'Utilisateur'
    },
    // action de prise en charge du ticket par l'utilisateur courant
    takeTicketInCharge: function () {
      this.ticket.inCharge = 'Utilisateur'
      this.ticket.state = 'En cours'
    }
  },

  data () {
    return {
      actionsButtons: [
        {          
          label: 'Prendre en charge',
          isVisible: !this.isTicketInChargeByUser(),
          isEnabled: !this.isTicketInChargeByUser(),
          actionFunction: () => { this.takeTicketInCharge() }
        },
        {
          label: 'Résoudre ticket',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
        {
          label: 'Poser une question au client',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
        {
          label: 'Poser une question à un équipier',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
        {
          label: 'Mettre en attente',
          isEnabled: this.isTicketInChargeByUser(),
          actionFunction: () => { }
        },
      ]
    }
  }  
}
</script>