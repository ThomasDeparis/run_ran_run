<template>
  <div style="max-width: 700px">
    <q-toolbar class="bg-blue-5 text-white shadow-2">
      <q-toolbar-title class="text-h6">Infos utiles</q-toolbar-title>
      <q-btn flat side icon="playlist_add" label="Ajouter" @click="addNewTip()" />
    </q-toolbar>

    <q-list bordered>
      <q-item v-for="tip in tipsList" :key="tip.id" class="q-my-sm">
        <!-- logo info pour décorer -->
        <q-item-section avatar>
          <q-icon name="info" color="blue" />
        </q-item-section>

        <!-- texte de l'info et la popup de modifiation de l'info -->
        <q-item-section>
          <q-item-label>
            <div v-if="tip.text.length > 0">{{ tip.text }}</div>
            <div v-else class="text-grey text-italic">Cliquer ici pour modifier</div>
            <q-popup-edit v-model="tip.text" title="Modifier l'info">
              <q-input v-model="tip.text" dense autofocus />
            </q-popup-edit>
          </q-item-label>
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
    },
    addNewTip: function () {
      this.tipsList.push({ 
        id: this.tipsList.length + 1,
        user: 1,
        text: '',
        thumbsUpCount: 0,
        thumbedUpByUser: false
        })
    }
  }
}
</script>