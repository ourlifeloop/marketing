import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import Layout from '../../primitives/layout';

import styles from './blog.module.scss';

export default ({ data }) => {
  console.log(styles, data);
  return (
    <SiteWrapper>
      <Layout>
        <BlogHeader />
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  query CustomerSpotlightQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "spotlight" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            photo {
              childImageSharp {
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`;
