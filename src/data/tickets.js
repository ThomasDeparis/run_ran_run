export default {
  emptyTicket: {
    id: 0,
    name: '',
    customer: '',
    criticality: '',
    status: '',
    inCharge: '',
    creationDate: '',
    usefulTips: [],
    solution: ''
  },
  allTickets: [
    {
      id: 10132,
      name: 'Impossible de créer compte',
      customer: 'Jean Dupont',
      criticality: 'Haute',
      status: 'En cours',
      inCharge: 'Utilisateur',
      creationDate: '19/04/2020',
      usefulTips: [],
      solution: ''
    },
    {
      id: 10148,
      name: 'Question sur les frais de port',
      customer: 'Albert Dupontel',
      criticality: 'Faible',
      status: 'En cours',
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
      ],
      solution: ''
    },
    {
      id: 9877,
      name: 'Produit reçu non conforme',
      customer: 'Isabelle Duchmol',
      criticality: 'Moyenne',
      status: 'Non pris en charge',
      inCharge: null,
      creationDate: '22/04/2020',
      usefulTips: [],
      solution: ''
    },
    {
      id: 10092,
      name: 'Impossible de créer compte',
      customer: 'Pierre Laurent',
      criticality: 'Haute',
      status: 'En cours',
      inCharge: 'Collègue 1',
      creationDate: '28/04/2020',
      usefulTips: [],
      solution: ''
    }
  ]
}
