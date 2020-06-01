<template>
  <q-layout view="lHh Lpr lFf">
      <rrr-header>
      </rrr-header>     

    <q-page-container>
      <router-view />
      <rrr-card-dialog />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderBar from 'components/header/HeaderBar'
import CardDetailDialog from 'components/cards/CardDetailDialog'

export default {
  name: 'MainLayout',

  components: {
    'rrr-header': HeaderBar,
    'rrr-card-dialog': CardDetailDialog
  },

  data () {
    return {}  
  }
}
</script>
