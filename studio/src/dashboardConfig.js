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
            title: 'Proposals Platonico',
            apiId: '1583fc34-8c57-4812-9c7b-4a4ec3115fa0',
            buildHookId: '613ffcf68bb45e0090d5dc10',
            name: 'platonico-proposals'
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