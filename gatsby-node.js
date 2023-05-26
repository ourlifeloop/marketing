const path = require('path');
const { uniq, forEach } = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              type
              topics
              userTypes
              responsibilities
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    // Build career pages
    result.data.allMarkdownRemark.edges
      .filter(({ node }) => !!node.frontmatter.responsibilities)
      .forEach(({ node }) =>
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/career.template.js`),
          context: { careerId: node.id },
        }),
      );

    // Build blog pages
    result.data.allMarkdownRemark.edges
      .filter(({ node }) => !!node.frontmatter.type)
      .forEach(({ node }) =>
        createPage({
          path: node.fields.slug,
          component: path.resolve(`src/templates/blog-post.template.js`),
          context: { postId: node.id },
        }),
      );

    // Build training pages
    const topicsByUserType = result.data.allMarkdownRemark.edges
      .filter(
        ({ node }) => !!node.frontmatter.topics && !!node.frontmatter.userTypes,
      )
      .reduce(
        (byType, { node }) => ({
          ...byType,
          ...node.frontmatter.userTypes.reduce(
            (newByType, userType) => ({
              ...newByType,
              [userType]: uniq([
                ...(byType[userType] || []),
                ...(node.frontmatter.topics || []),
              ]),
            }),
            {},
          ),
        }),
        {},
      );

    forEach(topicsByUserType, (topics, userType) => {
      createPage({
        path: `/training/${userType}`,
        component: path.resolve(`src/templates/training.template.js`),
        context: { userType },
      });
      topics.forEach((topic) =>
        createPage({
          path: `/training/${userType}/${topic}`,
          component: path.resolve(`src/templates/training-topic.template.js`),
          context: { userType, topic },
        }),
      );
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value });
  }
};

exports.onCreateWebpackConfig = ({ actions, getConfig }) => {
  const config = getConfig();
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.html$/i,
      loader: 'html-loader',
    },
  ];
  const miniCssExtractPlugin = config.plugins.find(
    (plugin) => plugin.constructor.name === 'MiniCssExtractPlugin',
  );
  if (miniCssExtractPlugin) {
    miniCssExtractPlugin.options.ignoreOrder = true;
  }
  actions.replaceWebpackConfig(config);
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter implements Node {
      responsibilities: [String]
      link: String
    }
  `;
  createTypes(typeDefs);
};
