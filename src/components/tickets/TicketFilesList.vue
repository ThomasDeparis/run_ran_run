<template>
  <div class="items-start q-gutter-md text-center">
    <q-toolbar class="bg-blue-5 text-white shadow-2">
      <q-toolbar-title class="text-h6">Pièces jointes</q-toolbar-title>
    </q-toolbar>

    <!-- bouton ajouter pièce jointe -->
    <q-btn 
      class="text-center"
      outline size="12px"
      icon="note_add"
      color="blue-5"
      label="Ajouter"
      @click="addAttachedFile()"
    />
    
    <!-- pièces jointes du ticket. Séparé en panel de 3 colonnes pour centrer les pj sous forme de card -->
    <div class="row">
      <div class="col" />
      <div class="col-10">
        <rrr-file-card
          v-for="tf in ticketFiles"
          :ticketFile="tf"
          :key="tf.id"
        />
      </div>
      <div class="col" />
    </div>
    
  </div>
</template>

<script>
import TicketFileCard from 'components/tickets/TicketFileCard.vue'

export default {
  name: 'TicketFilesList',
  components: {
    'rrr-file-card': TicketFileCard
  },
  props: {
    // énumération des pièces jointes du ticket
    ticketFiles: {
      type: Array,
      required: true
    }
  },

  data () {    
    return {}
  },
  methods: {
    addAttachedFile: function () {
      alert('La fonction d\'ajout de pièce jointe n\'est pas disponible dans la démo')
    }
  }
}
</script>