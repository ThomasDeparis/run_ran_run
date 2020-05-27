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
    solution: '',
    attachedFiles: []
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
      solution: '',
      attachedFiles: [
        {
          id: 1,
          name: 'Informations compte.pdf',
          extension: 'pdf',
          thumbsUpCount: 2,
          thumbedUpByUser: false
        },
        {
          id: 2,
          name: 'Document informatif client.doc',
          extension: 'doc',
          thumbsUpCount: 0,
          thumbedUpByUser: false
        },
        {
          id: 3,
          name: 'Capture ecran 1 problème',
          extension: 'jpg',
          thumbsUpCount: 2,
          thumbedUpByUser: true
        },
        {
          id: 4,
          name: 'Capture ecran 2 problème',
          extension: 'jpg',
          thumbsUpCount: 0,
          thumbedUpByUser: false
        }
      ]
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
      solution: '',
      attachedFiles: []
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
      solution: '',
      attachedFiles: []
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
      solution: '',
      attachedFiles: []
    }
  ]
}
