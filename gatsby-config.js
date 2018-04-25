module.exports = {
  siteMetadata: {
    title: 'Pokemon Go Reference Guide',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options:{
        name: `src`,
        path: `${__dirname}/src/`
      }
    },
    'gatsby-transformer-remark',
    'gatsby-transformer-json',
  ],
}
