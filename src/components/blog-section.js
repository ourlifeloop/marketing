import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { useDevice } from '../utils/effects';
import ArticleCard from './article-card';
import { take } from '../utils/lodash';

import styles from './blog-section.module.scss';

export default () => {
  const { isTablet, isMobile } = useDevice();
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

  let numPosts = isTablet ? 2 : 3;
  if (isMobile) {
    numPosts = 1;
  }

  return (
    <TitleSection
      width="large"
      header={'Stay "in the loop" with our latest blogs.'}
    >
      <FlexContainer>
        {take(posts.edges, numPosts).map(post => (
          <ArticleCard
            small
            className={styles.article}
            key={post.node.fields.slug}
            link={post.node.fields.slug}
            photo={post.node.frontmatter.photo.childImageSharp.fluid}
            title={post.node.frontmatter.title}
            excerpt={post.node.excerpt}
          />
        ))}
      </FlexContainer>
    </TitleSection>
  );
};
