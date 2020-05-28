import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogSection from './blog-section';

export default () => {
  const { allMarkdownRemark: posts } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { type: { eq: "insights" } } }
          limit: 3
        ) {
          edges {
            node {
              excerpt(pruneLength: 200)
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
    `,
  );

  return <BlogSection posts={posts} />;
};
