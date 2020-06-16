module.exports = {
  siteMetadata: {
    displayUrl: 'https://ourlifeloop.com',
    phoneNumber: '(402) 915-3860',
    inquiries: 'inquiries@ourlifeloop.com',
    careers: 'careers@ourlifeloop.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/cms`,
        name: 'cms',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/files`,
        name: 'files',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: { maxWidth: 700 },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-gtag',
      options: {
        trackingId: 'UA-56344911-1',
        head: false,
        anonymize: true,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-favicon',
    'gatsby-plugin-react-svg',
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    'gatsby-plugin-netlify',
    'gatsby-plugin-netlify-cache',
  ],
};
