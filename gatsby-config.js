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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `EB Garamond`,
            variants: [`400`, `700`],
          },
          {
            family: `Nunito Sans`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
  ],
}
