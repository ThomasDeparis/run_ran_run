<template>
  <q-layout view="lHh Lpr lFf">
      <rrr-header>
      </rrr-header>     

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import HeaderBar from 'components/header/HeaderBar'

export default {
  name: 'MainLayout',

  components: {
    'rrr-header': HeaderBar
  },

  data () {
    return {}  
  }
}
</script>
