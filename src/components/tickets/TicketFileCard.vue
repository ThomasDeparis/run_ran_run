<template>
  <q-card class="q-mb-md">
    <div class="q-px-xl q-py-md">
      <q-img basic :src="fileImageSource" />
    </div>

    <q-card-section>
      <div class="text-subtitle2">{{ ticketFile.name }}</div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn
        flat
        icon="thumb_up_alt"
        color="green"
        :label="ticketFile.thumbsUpCount"
        :disable="ticketFile.thumbedUpByUser"
        @click="thumbUp()"
      >
        <q-tooltip 
          content-class="shadow-4"
          content-style="font-size: 12px">
          J'ai trouvé cette pièce jointe très utile !
        </q-tooltip>
      </q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: 'TicketFileCard',
  data () {
    return {}
  },

  props: {
    // en entrée : l'objet représentant une pièce jointe
    ticketFile: {
      type: Object,
      required: true
    }
  },

  methods: {
    // suite à action utilisateur : pouce vers le haut ! :-)
    thumbUp: function () {
      this.ticketFile.thumbsUpCount += 1
      this.ticketFile.thumbedUpByUser = true
    }
  },
  computed: {
    // fournit la source de l'image à afficher pour la pj, en fonction du type de fichier en pj
    fileImageSource: function () {
      var imageSource
      switch (this.ticketFile.extension) {
        case 'pdf':
          imageSource = 'statics/icons/pdf-icon.png'
          break
        case 'doc':
        case 'docx':
          imageSource = 'statics/icons/docx-icon.png'
          break
        case 'png':
        case 'bmp':
        case 'jpg':
          imageSource = 'statics/icons/png-icon.png'
          break
        default:
          imageSource = ''
          break
      }
      return imageSource
    }
  }
}
</script>