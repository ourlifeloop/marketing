import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import BlogRoll from '../../components/blog-roll';
import Layout from '../../primitives/layout';

export default ({ data, location }) => {
  return (
    <SiteWrapper>
      <Layout>
        <BlogHeader pathname={location.pathname} />
        <BlogRoll posts={data.allMarkdownRemark.edges} />
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  query NewsQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "news" } } }
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
