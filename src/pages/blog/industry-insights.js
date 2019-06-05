import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import Layout from '../../primitives/layout';

// import styles from './blog.module.scss';

export default ({ location }) => {
  return (
    <SiteWrapper>
      <Layout>
        <BlogHeader pathname={location.pathname} />
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  query IndustryInsightsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "insights" } } }
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
