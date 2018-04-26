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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Pokemon Go Reference Guide",
        short_name: "PogoRefGuide",
        start_url: "/",
        background_color: "#21C0FB",
        theme_color: "#21C0FB",
        display: "standalone",
        icon: "/images/favicon.ico", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline'
  ],
}