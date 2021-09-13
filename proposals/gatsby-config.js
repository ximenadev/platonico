const path = require('path')

require('dotenv').config({
  path: `.env`
})

module.exports = {
  siteMetadata: {
    title: `Plat❋nico`,
    description: `A web tool to optimize making proposals for possible clients.`,
    author: `@ximenadev`,
    siteUrl: `https://proposals.platoni.co/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Platonico Proposals`,
        short_name: `platonico`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/images/platonico_icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        apiVersion: "v1",
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.resolve(__dirname, `./src/assets/svg`),
        }
      }
    },
    {
      resolve: `gatsby-plugin-scroll-reveal`,
      options: {
        threshold: 0.5
      }
    }
  ],
}
