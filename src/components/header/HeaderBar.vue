<template>
  <q-header class="bg-green-5 shadow-4">
    <div class="q-pa-md">
      <div class="row">
        <div class="q-pt-xs">
          <q-btn class="col" flat round color="white" :icon="showBonusIcon" @click="showBonus = !showBonus" />
        </div>
        <div class="col">
          <!-- Les onglets du menu -->     
          <q-tabs
            inline-label
            class="bg-green-5 text-white"
          >
            <q-route-tab
              :to="{ name: 'indexPage' }"
              name="accueil" 
              icon="home"
              label="Accueil"
              class="q-mx-md"
            />
            <q-route-tab
              :to="{ name: 'ticketsDashboard' }"
              name="tickets" 
              icon="note" 
              label="Tickets"
              class="q-mx-md"
            />
            <q-route-tab
            :to="{ name: 'cardsDashboard' }"
              name="bonus"
              icon="stars"
              label="Défis et bonus"
              class="q-mx-md" />
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
        <div class="col-shrink">
          <rrr-avatar :userProfile="userProfileInfo" />
        </div>
      </div>
    </div>
    
  </q-header>
</template>

<script>
import ActiveCardsPanel from 'components/header/ActiveCardsPanel'
import Avatar from 'components/header/Avatar'
import ProfileInfo from '../../data/profile.js'

export default {
  name: 'HeaderBar',
  components: {
    'rrr-active-bonus': ActiveCardsPanel,
    'rrr-avatar': Avatar
  },

  data () {
    return {
      showBonus: false,
      userProfileInfo: ProfileInfo.userProfile
    }
  },
  computed: {
    showBonusIcon: function () {
      return this.showBonus ? 'expand_less' : 'expand_more'
    }
  }
}
</script>