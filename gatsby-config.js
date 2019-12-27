const config = require('./config');

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.siteTitle,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.manifestName,
        short_name: config.manifestShortName,
        start_url: config.pathPrefix || config.manifestStartUrl,
        background_color: config.manifestBackgroundColor,
        theme_color: config.manifestThemeColor,
        display: config.manifestDisplay,
        icon: config.manifestIcon, // This path is relative to the root of the site.
      },
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: 'maesotericon.com',
      },
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: 'https://maesotericon.us5.list-manage.com/subscribe/post?u=89f422bfc970ea7a59041270f&amp;id=1acddc0a37',
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
