<template>
  <q-page class="center">
      <tickets-table :data="myTickets" title="Mes Tickets"></tickets-table>
      <tickets-table :data="teamTickets" title="Tickets dans mon équipe"></tickets-table>
  </q-page>
</template>

<script>
import TicketsTable from 'components/Tickets/TicketsTable.vue'
import TicketData from 'src/data/tickets.js'

export default {
  name: 'TicketsDashboard',
  components: {
    'tickets-table': TicketsTable
  },
  computed: {
    myTickets: function () {
      return TicketData.allTickets.filter(t => t.inCharge === 'Utilisateur')
    },
    teamTickets: function () {
      return TicketData.allTickets.filter(t => t.inCharge !== 'Utilisateur')
    }
  }
}
</script>
