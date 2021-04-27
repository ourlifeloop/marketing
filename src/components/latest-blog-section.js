import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import BlogSection from './blog-section';

export default function LatestBlogSection() {
  const { allMarkdownRemark: posts } = useStaticQuery(
    graphql`
      {
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
                    gatsbyImageData(width: 500, layout: CONSTRAINED)
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
}
