export default {
  emptyTicket: {
    id: 0,
    name: '',
    customer: '',
    criticality: '',
    state: '',
    inCharge: '',
    creationDate: '',
    usefulTips: []
  },
  allTickets: [
    {
      id: 10132,
      name: 'Impossible de créer compte',
      customer: 'Jean Dupont',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '19/04/2020',
      usefulTips: []
    },
    {
      id: 10148,
      name: 'Question sur les frais de port',
      customer: 'Albert Dupontel',
      criticality: 'Faible',
      state: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '15/04/2020',
      usefulTips: [
        { 
          id: 1,
          user: 1,
          text: 'Le client souhaite être livré en Guadeloupe',
          thumbsUpCount: 1,
          thumbedUpByUser: false
        },
        {
          id: 2,
          user: 1,
          text: 'Identifiant technique du client : 000457',
          thumbsUpCount: 5,
          thumbedUpByUser: false
        }
      ]
    },
    {
      id: 9877,
      name: 'Produit reçu non conforme',
      customer: 'Isabelle Duchmol',
      criticality: 'Moyenne',
      state: 'Non pris en charge',
      inCharge: null,
      creationDate: '22/04/2020',
      usefulTips: []
    },
    {
      id: 10092,
      name: 'Impossible de créer compte',
      customer: 'Pierre Laurent',
      criticality: 'Haute',
      state: 'En cours',
      inCharge: 'Collègue 1',
      creationDate: '28/04/2020',
      usefulTips: []
    }
  ]
}
