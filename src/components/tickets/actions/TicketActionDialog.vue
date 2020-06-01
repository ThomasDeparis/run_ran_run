<template>
  <q-dialog v-model="showDialog">    
    <q-card  style="width: 700px; max-width: 80vw;">
      <q-card-section class="bg-green-5">
        <div class="text-h6 text-white">{{ dialogTitle }}</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="textInput"
          type="textarea"
          :placeholder="textInputPlaceholder"
          :rules="[val => !!val || 'Compléter le commentaire pour valider']"
        />
      </q-card-section>
      <q-card-actions align="right" class="bg-white text-teal green-5">
        <q-btn flat :label="validateButtonLabel" :disable="textInput == ''" @click="validate()" />
        <q-btn flat label="Annuler" v-close-popup />
      </q-card-actions>
    </q-card>    
  </q-dialog>
</template>

<script>
import actionEvents from '../../../scripts/tickets/ticketActionEvents'

export default {
  name:'TicketActionDialog',
  data () {
    return {
      showDialog: false,
      textInput: ''
    }
  },
  props: {
    actionEvent: {
      type: String,
      required: true
    },    
    dialogTitle: '',
    textInputPlaceholder: '',
    validateButtonLabel: ''
  },

  created () {
    // écoute l'évènement d'ouverture de popup
    actionEvents.eventManager.$on(this.actionEvent, () => {
      this.showDialog = true
    });
  },

  
  methods: {
    validate: function () {
      this.showDialog = false
      // notifie que l'utilisateur a cliqué sur valider, fournit le textInput en paramètre
      actionEvents.eventManager.$emit(actionEvents.notifyDialogValidationEvent, this.actionEvent, this.textInput)
      // efface le commentaire pour la possible prochaine ouverture de cette popup
      this.textInput = ''
    }
  }
}
</script>