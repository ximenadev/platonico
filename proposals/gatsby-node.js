exports.createPages = async ({ graphql, actions }) => {
  const
    { createPage } = actions,
    result = await graphql(`
      query ProjectQuery {
        proposals: allSanityProposal {
          nodes {
            _id
            version
            prospect {
              name
              company
            }
          }
        }
      }
    `)

  if (result.errors) {
    throw result.errors
  }

  const proposals = result.data.proposals || []

  proposals.nodes.forEach(proposal => {
    const path = `${proposal.prospect.company}/v${proposal.version}`

    createPage({
      path,
      component: require.resolve('./src/templates/Proposal.js'),
      context: {
        id: proposal._id
      }
    })
  });
}
