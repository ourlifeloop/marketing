const path = require('path');
const { uniq, flatten } = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

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
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

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
    uniq(
      flatten(
        result.data.allMarkdownRemark.edges.map(
          ({ node }) => node.frontmatter.topics || [],
        ),
      ),
    ).map(topic =>
      createPage({
        path: `/training/${topic}`,
        component: path.resolve(`src/templates/training.template.js`),
        context: { topic },
      }),
    );
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node);

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });
    createNodeField({ name: 'slug', node, value });
  }
};
