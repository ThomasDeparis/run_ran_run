<template>
  <q-page>
      <rrr-tickets-table :data="myTickets" title="Mes Tickets non résolus"></rrr-tickets-table>
      <rrr-tickets-table :data="teamTickets" title="Tickets non résolus dans mon équipe"></rrr-tickets-table>
  </q-page>
</template>

<script>
import TicketsTable from 'components/tickets/TicketsTable.vue'
import TicketData from 'src/data/tickets.js'

export default {
  name: 'TicketsDashboard',
  components: {
    'rrr-tickets-table': TicketsTable
  },
  computed: {
    myTickets: function () {
      return TicketData.allTickets.filter(t => t.inCharge === 'Utilisateur' && t.status != 'Résolu')
    },
    teamTickets: function () {
      return TicketData.allTickets.filter(t => t.inCharge !== 'Utilisateur' && t.status != 'Résolu')
    }
  }
}
</script>
