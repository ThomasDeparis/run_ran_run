export default {
  emptyTicket: {
    id: 0,
    name: '',
    customer: '',
    criticality: '',
    state: '',
    inCharge: '',
    creationDate: ''
  },
  allTickets: [
    {
      id: 10132,
      name: 'Impossible de créer compte',
      customer: 'Jean Dupont',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '19/04/2020'
    },
    {
      id: 10148,
      name: 'Question sur les frais de port',
      customer: 'Albert Dupontel',
      criticality: 'Faible',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '15/04/2020'
    },
    {
      id: 9877,
      name: 'Produit reçu non conforme',
      customer: 'Isabelle Duchmol',
      criticality: 'Moyenne',
      state: 'En cours',
      inCharge: null,
      creationDate: '22/04/2020'
    },
    {
      id: 10148,
      name: 'Impossible de créer compte',
      customer: 'Pierre Laurent',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Collègue 1',
      creationDate: '28/04/2020'
    }
  ],

  // pour alimenter la tableau avec mes tickets affectés
  myTickets: [
    {
      id: 10132,
      name: 'Impossible de créer compte',
      customer: 'Jean Dupont',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '19/04/2020'

    },
    {
      id: 10148,
      name: 'Question sur les frais de port',
      customer: 'Albert Dupontel',
      criticality: 'Faible',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '15/04/2020'
    }
  ],

  // pour alimenter le tableau avec les tickets affectés à l'équipe
  teamTickets: [
    {
      id: 9877,
      name: 'Produit reçu non conforme',
      customer: 'Isabelle Duchmol',
      criticality: 'Moyenne',
      state: 'En cours',
      inCharge: null,
      creationDate: '22/04/2020'
    },
    {
      id: 10148,
      name: 'Impossible de créer compte',
      customer: 'Pierre Laurent',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Collègue 1',
      creationDate: '28/04/2020'
    }
  ]
}
