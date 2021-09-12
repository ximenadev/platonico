export default {
  widgets: [
    {
      name: 'netlify',
      layout: {width: 'small'},
      options: {
        title: 'Deploys',
        description: `Every time a change is made and published, the site needs to be deployed. Your free plan includes 300 mins of deployment (2 min per deploy). The billing period starts on the 11th of every month.`,
        sites: [
          {
            title: 'Proposals',
            apiId: '0aa894bc-6094-4bf4-bc00-45252bea6f96',
            buildHookId: '601c3a94b58ba3952da405fd',
            name: 'proposals'
          }
        ]
      }
    },
    {
      name: 'document-list',
      options: {
        title: 'Recent: Proposals',
        order: '_createdAt desc',
        types: ['proposal'],
        createButtonText: 'Create new proposal'
      },
      layout: {width: 'small'},
      limit: 8
    },
  ]
}