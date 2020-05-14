<template>
  <q-header class="bg-green-5 shadow-4">
    <div class="q-pa-md">
      <div class="row">
        <div class="q-pt-xs">
          <q-btn class="col" flat round color="white" :icon="showBonusIcon" @click="showBonus = !showBonus" />
        </div>
        <div class="col-11">
          <!-- Les onglets du menu -->       
          <q-tabs
            v-model="menuTab" 
            inline-label
            class="bg-green-5 text-white">
            <q-route-tab
              :to="{ name: 'ticketsDashboard' }"
              name="tickets" 
              icon="note" 
              label="Tickets"
              class="q-mx-md"
            />            
            <q-tab name="bonus" icon="stars" label="Défis et bonus" class="q-mx-md" />
            <q-route-tab
              :to="{ name: 'profile' }" 
              name="myProfile"
              icon="account_box"
              label="Mon profil"
              class="q-mx-md"
            />
          </q-tabs>

          <!-- Panel pour afficher les défis et cartes bonus activées -->
         <rrr-active-bonus :showBonus="showBonus" />
        </div>
      
        <!-- Avatar et expérience à droite du menu -->
        <div class="col">
          <rrr-avatar imageSource="statics\icons\icon-192x192.png" />
        </div>
      </div>
    </div>
    
  </q-header>
</template>

<script>
import ActiveBonus from 'components/header/ActiveBonus'
import Avatar from 'components/header/Avatar'

export default {
  name: 'HeaderBar',
  components: {
    'rrr-active-bonus': ActiveBonus,
    'rrr-avatar': Avatar
  },

  data () {
    return {
      menuTab: 'tickets',
      showBonus: false
    }
  },
  computed: {
    showBonusIcon: function () {
      return this.showBonus ? 'expand_less' : 'expand_more'
    }
  }
}
</script>