<template>
  <q-page>
    <div class="q-ma-md q-pa-md bg-grey-2 text-center shadow-5">
      <q-img :src="userProfile.general.avatarImageSource" width="170px" />
      <p class="text-h5">{{ userProfile.general.name }}</p>
    </div>
    <!-- Avancement dans le niveau de l'utilisateur -->
    <div class="q-ma-md bg-grey-2 shadow-2">      
      <div class="q-mx-xl">
        <p class="text-h5 q-py-sm">Niveau {{ userProfile.general.level }}</p>
        <q-linear-progress
          stripe
          rounded
          size="20px"
          :value="userProfile.general.experiencePoints/userProfile.general.maxExperiencePoints"
          color="amber-4"
        >
          <div class="absolute-full flex flex-center">
            <q-badge
              color="transparent"
              text-color="black"
              :label="userProfile.general.experiencePoints + ' / ' + userProfile.general.maxExperiencePoints" />
          </div>
        </q-linear-progress>
        <p class="q-py-md">Prochain niveau dans {{ userProfile.general.maxExperiencePoints - userProfile.general.experiencePoints }} points d'expérience</p>
      </div>      
    </div>
    <!-- Statistiques sous forme de circular progress -->
    <div class="text-center bg-grey-2 q-mx-md shadow-2">
      <div class="bg-grey-2">
        <p class="text-h5 q-py-sm">Moyennes</p>
      </div>           
      <div class="row">
        <div class="circular-stat">
          <p class="text-deep-orange">tickets résolus par semaine</p>
          <q-circular-progress
            show-value
            class="text-deep-orange q-mb-md"
            value=13.2
            min=0
            max=16
            size="80px"
            color="deep-orange"
          />
        </div>
        <div class="circular-stat">
          <p class="text-light-blue">tickets pris en charge par semaine</p>
          <q-circular-progress
            show-value
            class="text-light-blue q-mb-md"
            value=17
            min=0
            max=30
            size="80px"
            color="light-blue"
          />
        </div>        
      </div>
      <div class="row">        
        <div class="circular-stat">
          <p class="text-light-green">Temps moyen de résolution</p>
          <q-circular-progress
            show-value
            class="text-light-green q-mb-md"
            value=12
            min=0
            max=30
            size="80px"
            color="light-green"
          >
          2h42
          </q-circular-progress>
        </div>
        <div class="circular-stat">
          <p class="text-amber-5">Points par ticket résolu</p>
          <q-circular-progress
            show-value
            class="text-amber-5 q-mb-md"
            min=0
            max=800
            value=328
            size="80px"
            color="amber-5"
          />
        </div>
      </div>
    </div>
    <!-- autres statistiques --> 
    <div class="q-ma-md q-pa-md shadow-2 bg-grey-2">
      <div class="text-center q-py-none">
        <p class="text-h5">Autres statistiques</p>
      </div> 
      <q-list bordered class="q-ma-md bg-white" style="width: 50%">
        <template v-for="ticketStat in userProfile.ticketStats">
          <q-item>
            <q-item-section avatar>
              <q-icon color="blue" name="note" />
            </q-item-section>
            <q-item-section>{{ ticketStat.title }}</q-item-section>
            <q-item-section side>{{ ticketStat.value }}</q-item-section>
          </q-item>
          <q-separator />
        </template>
        <template v-for="challengeStat in userProfile.challengeStats">
          <q-item>
            <q-item-section avatar>
              <q-icon color="blue" name="stars" />
            </q-item-section>
            <q-item-section>{{ challengeStat.title }}</q-item-section>
            <q-item-section side>{{ challengeStat.value }}</q-item-section>
          </q-item>
          <q-separator />
        </template>          
      </q-list>
    </div>
  </q-page>
</template>

<script>
import ProfileInfo from '../../data/profile.js'

export default {
  name: 'UserProfile',
  data () {
    return {
      userProfile: ProfileInfo.userProfile
    }
  }
}
</script>

<style>
.circular-stat {
  /* équivalence classe col */
  width: auto;
  min-width: 0;
  max-width: 100%;
  flex: 10000 1 0%;
  /* fin équivalence */
  text-align: center;
  background: #ffffffff;
  margin: 20px 80px 20px 80px;
}
.circular-stat p {
  font-size: 14px;
  text-transform: uppercase;
  padding: 16px 0 0;
}

</style>