<template>
  <div>
    <!-- template de la page si numéro de ticket fourni ok  -->
    <template v-if="IsValidTicketId()">
      <div class="row">
        <!-- div de la partie pièces jointes (partie gauche de la page) -->
        <div class="col-2">
          <rrr-attached-files-list />
        </div> 
        <!-- div de la partie droite (toutes les infos du ticket) -->
        <div class="col-10">
          <div class="q-mx-md q-mb-xl bg-grey-2 text-center shadow-5">
            <!-- Utiliser des floating action buttons pour les variantes des boutons action ? (question équipe/client) -->
            <q-btn class="q-ma-md shadow-3"  color="light-green-5" label="Résoudre ticket" />
            <q-btn class="q-ma-md shadow-3" color="green-5" label="Poser une question au client" />
            <q-btn class="q-ma-md shadow-3" color="green-5" label="Poser une question à un équipier" />
            <q-btn class="q-ma-md shadow-3" color="green-5" label="Mettre en attente" />
          </div>
          <div class="q-ma-md">
            <q-badge outline
              class="text-subtitle2"
              :color="ticketStatusBadge.color"
              :label="ticketStatusBadge.label"
            />
          </div>
          <div class="q-ma-md bg-grey-2 shadow-2">
            <p class="text-h6">Numéro {{ ticket.id }}</p>
            <p class="text-h5">
              {{ ticket.name }} 
              <q-badge align="top" :color="ticketCriticalityColor" class="q-mx-xs">
                Criticité : {{ ticket.criticality }}
              </q-badge>
            </p>
            <p>Créé le {{ ticket.creationDate }}</p>
            <p>Demandeur : {{ ticket.customer }}</p>
          </div>
          <div class="q-ma-md bg-grey-2 shadow-2">
            <q-input
              v-model="ticketDescription"
              autogrow
              readonly
              label="Description"
              label-color="black"
              input-class="text-justify q-pa-xl"
            />
          </div>
          <rrr-tips-list class="q-ma-md shadow-2" :tipsList="ticket.usefulTips" />
        </div>
      </div>
    </template>
    <!-- lorsque le numéro de ticket fourni est incorrect -->
    <template v-else>
      <q-banner rounded class="bg-red text-white">
        Identifiant de ticket invalide
      </q-banner>
    </template>
  </div>
</template>

<script>
import TicketData from 'src/data/tickets.js'
import TipsList from 'components/tickets/TicketTipsList'
import FilesList from 'components/tickets/TicketFilesList'

export default {
  name: 'ticketDetail',
  data: function () {
    return {
      ticket: TicketData.allTickets.find(t => t.id == this.$route.params.id),
      ticketDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  },
  components: {
    'rrr-tips-list': TipsList,
    'rrr-attached-files-list': FilesList
  },
  watch: {
    '$route.params.id': function (to, from) {
        this.ticket = TicketData.allTickets.find(t => t.id == this.$route.params.id)    
    }
  },
  computed: {
    // fournit la couleur du badge pour indiquer la criticité du ticket
    ticketCriticalityColor: function () {
      var color
      switch (this.ticket.criticality.toLowerCase()) {
        case 'faible':
          color = 'blue'
          break
        case 'moyenne':
          color = 'orange'
          break
        case 'haute':
          color = 'red'
          break
        default:
          color = 'blue'
          break
      }

      return color
    },
    ticketStatusBadge: function () {
      var label, color
      switch(this.ticket.state.toLowerCase()) {        
        case 'en cours':
          label = 'En cours par ' + this.ticket.inCharge
          color = 'green'
          break
        case 'en attente':
          label = this.ticket.state
          color = 'orange'
          break
        case 'non pris en charge':
          label = this.ticket.state
          color = 'red'
          break
        default:
          label = this.ticket.state
          color = 'black'
          break        
      }

      return {
        label,
        color
      }
    }   
  },

  methods: {
    // indique si l'identifiant de ticket fourni dans l'url correspond bien à un ticket
    IsValidTicketId: function () {
      return !isNaN(parseInt(this.$route.params.id, 10)) && this.ticket != null
    }
  }
}
</script>
