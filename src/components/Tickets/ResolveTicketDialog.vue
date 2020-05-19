<template>
  <q-dialog v-model="showDialog">    
    <q-card  style="width: 700px; max-width: 80vw;">
      <q-card-section class="bg-green-5">
        <div class="text-h6 text-white">Résoudre ticket numéro {{ ticket.id }}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="solution"
          type="textarea"
          placeholder="Solution"
          :rules="[val => !!val || 'Compléter la solution pour résoudre le ticket']"
        />
      </q-card-section>
      <q-card-actions align="right" class="bg-white text-teal green-5">
        <q-btn flat label="Résoudre" :disable="solution == ''" @click="resolveTicket" />
        <q-btn flat label="Annuler" v-close-popup />
      </q-card-actions>
    </q-card>    
  </q-dialog>
</template>

<script>
import actionEvents from '../../scripts/tickets/ticketActionEvents.js'

export default {
  name:'ResolveTicketDialog',
  data () {
    return {
      showDialog: false,
      solution: '',
      ticket: Object
    }
  },

  created () {
    // écoute l'évènement d'ouverture de popup
    actionEvents.eventManager.$on(actionEvents.openDialogResolveTicket, (ticketToResolve) => {
      this.ticket = ticketToResolve;
      this.showDialog = true;
    });
  },

  methods: {
    resolveTicket: function () {
      if(this.solution != '') {
      this.ticket.status = 'Résolu'
      this.ticket.solution = this.solution
      // efface la solution pour la possible prochaine ouverture de cette popup
      this.solution = ''
      this.showDialog = false
      actionEvents.eventManager.$emit(actionEvents.updateActionButtonsEnabling)
      }      
    }
  }
}
</script>