<template>
  <div>
    <template v-if="IsValidTicketId()">
      <div class="q-mx-md bg-grey-2">
        <q-btn class="glossy q-ma-md" rounded color="green-5" label="Action 1" />
        <q-btn class="glossy q-ma-md" rounded color="green-5" label="Action 2" />
        <q-btn class="glossy q-ma-md" rounded color="green-5" label="Action 3" />
        <q-btn class="glossy q-ma-md" rounded color="green-5" label="Action 4" />
      </div>
      <div class="q-ma-md bg-grey-2">
        <h3>Ticket {{ myTicket.id }}</h3>
        <h4>Créé le {{ myTicket.creationDate }}</h4>
      </div>
    </template>
    <template v-else>
      <q-banner rounded class="bg-red text-white">
        Identifiant de ticket invalide
      </q-banner>
    </template>
  </div>
</template>


<script>
import TicketData from 'src/data/tickets.js'

export default {
  name: 'ticketDetail',
  data: function () {
    return {
      myTicket: TicketData.allTickets.find(t => t.id == this.$route.params.id),
      ticketDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  watch: {
    '$route.params.id': function (to, from) {
        this.myTicket = TicketData.allTickets.find(t => t.id == this.$route.params.id)    
    }
  },
  methods: {
    // indique si l'identifiant de ticket fourni dans l'url correspond bien à un ticket
    IsValidTicketId: function () {
      return !isNaN(parseInt(this.$route.params.id, 10)) && this.myTicket != null
    }
  }
}
</script>
