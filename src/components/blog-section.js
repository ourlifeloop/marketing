import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { useDevice } from '../utils/effects';
import ArticleCard from './article-card';
import { take } from '../utils/lodash';

import styles from './blog-section.module.scss';

export default function BlogSection({ header, posts }) {
  const { isTablet, isMobile } = useDevice();

  let numPosts = isTablet ? 2 : 3;
  if (isMobile) {
    numPosts = 1;
  }

  return (
    <TitleSection width="large" header={header}>
      <FlexContainer>
        {take(posts.edges, numPosts).map(post => (
          <ArticleCard
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
}

BlogSection.propTypes = {
  header: PropTypes.string,
  posts: PropTypes.shape({
    edges: PropTypes.arrayOf(PropTypes.shape({ node: PropTypes.shape() })),
  }).isRequired,
};

BlogSection.defaultProps = {
  header: 'Stay "in the loop" with our latest blogs.',
};
