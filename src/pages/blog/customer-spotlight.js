import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import BlogFooter from '../../components/blog-subscriber';
import BlogRoll from '../../components/blog-roll';
import Layout from '../../primitives/layout';

export default ({ data, location }) => {
  return (
    <SiteWrapper title="Blog | LifeLoop assisted living community management software">
      <Layout>
        <BlogHeader pathname={location.pathname} />
        <BlogRoll posts={data.allMarkdownRemark.edges} />
      </Layout>
      <BlogFooter />
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
