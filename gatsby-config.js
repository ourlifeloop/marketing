module.exports = {
  siteMetadata: {
    displayUrl: 'https://lifeloop.com',
    phoneNumber: '(402) 915-3860',
    inquiries: 'inquiries@lifeloop.com',
    careers: 'careers@lifeloop.com',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/images`,
        name: 'images',
      },
    },
    'gatsby-plugin-image',
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
            options: { maxWidth: 700, linkImagesToOriginal: false },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['UA-56344911-1', 'AW-446319677'],
        pluginConfig: {
          head: true,
        },
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'LifeLoop assisted living community management software: connecting families, residents and communities.',
        short_name: 'LifeLoop',
        start_url: '/',
        background_color: '#f6f8fa',
        theme_color: '#0186ed',
        display: 'standalone',
        icon: 'src/favicon.png',
      },
    },
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
  ],
};
