<template>
  <q-page>
    <!-- Titre -->
    <div class="text-center q-ma-md q-pa-md shadow-5">
      <h4>Bienvenue sur la démo !</h4>
      <q-img
        height="150px"
        width="150px"
        src="/statics/3r-logo.png"
        class="q-ma-md"
      />
    </div>
    <!-- Fonctions présentes dans la démo -->
    <div class="q-ma-md q-pa-md shadow-2">
      <p class="q-pa-md">
        Cette démo vous permettra d'avoir un aperçu des fonctionnalités principales de l'application, notamment :
      </p>
      <ul class="q-mx-xl">
        <li>Retrouver les tickets organisés par tableaux</li>
        <li>La consultation simple et ergonomique d'un incident</li>
        <li>L'intégration de la gamification, avec un système de points d'expériences et d'un jeu de cartes !</li>
      </ul>
    </div>
    <!-- Fonctions manquantes dans la démo -->
    <div class="q-ma-md q-pa-md shadow-2">
      <p class="q-pa-md">
        Veuillez noter que toutes les idées et fonctionnalités pour <strong>Run Ran Run</strong> ne sont pas présentes, comme par exemple :
      </p>
      <ul class="q-mx-xl">
        <li>Le gain d'expérience et de niveau lorsque vous terminez un ticket</li>
        <li>La création de vos propres tableaux personnalisés pour regrouper les tickets comme vous le souhaitez</li>
        <li>La prise en compte de vos cartes actives lorsque vous terminez un ticket</li>
        <li>La personnalisation du profil utilisateur</li>
      </ul>
      <p class="q-pa-md">
        Egalement, vous constaterez dans la démo que certaines données sont statiques.
      </p>
    </div>
    <!-- Explication des cartes -->
    <div class="q-ma-md q-pa-xl shadow-2">
      <p class="text-subtitle2 text-center"><u>Comment fonctionnent les cartes ?</u></p>
      <p class="q-pa-md">
        Les cartes octroient un extra lorsque vous résolvez un ticket. Il existe deux types de cartes :
      </p>
      <div class="row justify-around">
        <!-- Exemple carte défi -->
        <q-card class="col card">
          <div class="q-pa-md">
            <img
              width="150px"
              src="statics/icons/cards/challenge-1ticket-x2exp.png"
            />
          </div>      
          <q-card-section style="text-align:center;">  
            <div class="text-uppercase">Les cartes défi</div>
          </q-card-section>
          <q-card-section style="text-align:justify;">  
            Elles sont renouvelées de manière quotidienne ou hebdomadaire et donnent du challenge dans la journée de travail. Ce sont des défis à durée limitée qu'il faut exploiter au maximum !
          </q-card-section>
        </q-card>
        <!-- Exemple carte bonus -->
        <q-card class="col card">
          <div class="q-pa-md">
            <img
              width="150px"
              src="statics/icons/cards/bonus-24h-plus100chance-get-card.png"
            />
          </div>   
          <q-card-section style="text-align:center;">  
            <div class="text-uppercase">Les cartes bonus</div>
          </q-card-section>
          <q-card-section style="text-align:justify;">  
            Elles sont données aléatoirement lorsque vous terminez un ticket, et sont à usage unique. Lorsque vous terminez un ticket avec une carte bonus active, son bonus s'applique et la carte se consomme.
          </q-card-section>
        </q-card>
      </div>
    </div>
    <!-- Pied de page -->
    <div class="q-pa-sm text-center">
      <h5>N'hésitez pas à tester toutes les fonctionnalités proposées !</h5>
      <a href="https://runranrun.net">Retour sur la page principale</a>
    </div>
  </q-page>
</template>

<script>

export default {
  name: 'PageIndex'
}
</script>

<style scoped>
  .card {
    width: 100px;
    text-align: center;
    margin-left: 50px;
    margin-right: 50px;
  }
</style>