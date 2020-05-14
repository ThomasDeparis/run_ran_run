<template>
  <div style="max-width: 700px">
    <q-toolbar class="bg-blue-5 text-white shadow-2">
      <q-toolbar-title class="text-h6">Infos utiles</q-toolbar-title>
      <q-btn flat side icon="playlist_add" label="Ajouter" />
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="tip in tipsList" :key="tip.id" class="q-my-sm">
        <!-- logo info pour décorer -->
        <q-item-section avatar>
          <q-icon name="info" color="blue" />
        </q-item-section>

        <!-- texte de l'info -->
        <q-item-section>
          <q-item-label>{{ tip.text }}</q-item-label>
        </q-item-section>

        <!-- bouton thumb up et compteur d'utilité de l'info -->
        <q-item-section side>
          <q-btn
            :disable="tip.thumbedUpByUser"
            flat
            icon="thumb_up_alt"
            color="green"
            :label="tip.thumbsUpCount"
            @click="thumbUp(tip)"
          >
            <q-tooltip 
              content-class="shadow-4"
              content-style="font-size: 12px">
              J'ai trouvé cette info très utile !
            </q-tooltip>
          </q-btn>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  name: 'TicketTipsList',
  data () {
    return {
    }
  },

  props: {
    tipsList: {
      required: true
    }
  },

  methods: {
    thumbUp: function (tip) {
      tip.thumbsUpCount += 1
      tip.thumbedUpByUser = true
    }
  }
}
</script>