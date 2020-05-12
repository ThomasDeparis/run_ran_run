<template>
  <div class="items-start q-gutter-md" style="max-width:200px;">
    <q-toolbar class="bg-blue-5 text-white shadow-2">
      <q-toolbar-title class="text-h6">Pièces jointes</q-toolbar-title>
      <!-- <q-btn flat side icon="playlist_add" label="Ajouter" /> -->
    </q-toolbar>

    <q-card style="text-align:center;">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-subtitle2">Pièce jointe 1.pdf</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
            flat
            icon="thumb_up_alt"
            color="green"
            :label="1"
          >
            <q-tooltip 
              content-class="shadow-4"
              content-style="font-size: 12px">
              J'ai trouvé cette pièce jointe très utile !
            </q-tooltip>
          </q-btn>
      </q-card-actions>
    </q-card>
    <q-card class="my-card">
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section>
        <div class="text-subtitle2">Pièce jointe 2.pdf</div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
            flat
            icon="thumb_up_alt"
            color="green"
            :label="0"
          >
            <q-tooltip 
              content-class="shadow-4"
              content-style="font-size: 12px">
              J'ai trouvé cette pièce jointe très utile !
            </q-tooltip>
          </q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  name: 'TicketFilesList',
  data () {    
    return {}
  }
}
</script>