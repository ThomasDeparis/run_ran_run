<template>
  <div class="q-pa-md">
    <q-tabs
        v-model="tab"
        inline-label
        class="bg-purple text-white shadow-2"
      >
        <q-tab name="mails" icon="mail" label="Mails" />
        <q-tab name="alarms" icon="alarm" label="Alarms" />
        <q-tab name="movies" icon="movie" label="Movies" />
      </q-tabs>
  </div>
</template>

<script>
export default {
  name: 'HeaderBar',
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>