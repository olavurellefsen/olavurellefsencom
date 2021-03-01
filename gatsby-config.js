module.exports = {
  siteMetadata: {
    title: `Olavur Ellefsen`,
    description: `The personal homepage of Ólavur Ellefsen, an entrepreneur from the Faroe Islands.`,
    author: `@olavur`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/olavur.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Nunito Sans\:400,700`,
          `Source Sans Pro\:400,900`,
        ],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `ellefsen.fo`,
      },
    },
  ],
}
