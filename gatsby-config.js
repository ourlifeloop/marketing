/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    phoneNumber: '(402) 915-3860',
    email: 'inquiries@ourlifeloop.com',
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-plugin-netlify-cms',
  ],
};
