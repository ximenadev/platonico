exports.createPages = async ({ graphql, actions }) => {
  const
    { createPage } = actions,
    result = await graphql(`
      query ProjectQuery {
        proposals: allSanityProposal {
          nodes {
            _id
            version
          }
        }
      }
    `)

  if (result.errors) {
    throw result.errors
  }

  const proposals = result.data.proposals || []

  proposals.nodes.forEach(proposal => {
    const path = `proposal/${proposal._id}/v${proposal.version}`

    createPage({
      path,
      component: require.resolve('./src/templates/Proposal.js'),
      context: {
        id: proposal._id
      }
    })
  });
}
