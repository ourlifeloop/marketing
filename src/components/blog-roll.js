import React, { useState } from 'react';
import { chunk, slice } from 'lodash';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import Button from '../primitives/button';
import ArticleCard from './article-card';

import styles from './blog-roll.module.scss';

export default function BlogRoll({ posts }) {
  const { isTablet, isMobile } = useDevice();
  const [showMore, setShowMore] = useState(false);
  if (!posts.length) {
    return null;
  }

  const [firstPost, secondPost, ...olderPosts] = posts;

  let firstRowPosts = [];
  if (firstPost) {
    firstRowPosts = [
      ...firstRowPosts,
      <ArticleCard
        key={firstPost.node.fields.slug}
        className={classNames(styles.firstRowPost, {
          [styles.firstRowPostVertical]: isMobile,
        })}
        link={firstPost.node.fields.slug}
        photo={firstPost.node.frontmatter.photo.childImageSharp.fluid}
        title={firstPost.node.frontmatter.title}
        excerpt={firstPost.node.excerpt}
      />,
    ];
  }
  if (secondPost) {
    firstRowPosts = [
      ...firstRowPosts,
      <ArticleCard
        key={secondPost.node.fields.slug}
        className={classNames(styles.firstRowPost, {
          [styles.firstRowPostVertical]: isMobile,
        })}
        link={secondPost.node.fields.slug}
        photo={secondPost.node.frontmatter.photo.childImageSharp.fluid}
        title={secondPost.node.frontmatter.title}
        excerpt={secondPost.node.excerpt}
      />,
    ];
  }

  let chunkedOlderPosts = chunk(olderPosts, 3);
  if (isMobile) {
    chunkedOlderPosts = chunk(olderPosts, 1);
  } else if (isTablet) {
    chunkedOlderPosts = chunk(olderPosts, 2);
  }

  let isMorePosts = false;
  if (!showMore) {
    const slicedPosts = slice(chunkedOlderPosts, 0, 1);
    isMorePosts = slicedPosts.length < chunkedOlderPosts.length;
    if (isMorePosts) {
      chunkedOlderPosts = slicedPosts;
    }
  }

  console.log(chunkedOlderPosts);

  return (
    <>
      <FlexContainer
        direction={isMobile ? 'column' : 'row'}
        className={styles.postContainer}
      >
        {firstRowPosts}
      </FlexContainer>
      {!!olderPosts.length &&
        chunkedOlderPosts.map((rowPosts, i) => (
          <FlexContainer key={i} className={styles.postContainer}>
            {rowPosts.map(otherPost => (
              <ArticleCard
                small={!isTablet}
                key={otherPost.node.fields.slug}
                className={classNames(styles.otherRowPost, {
                  [styles.otherRowPostTablet]: isTablet,
                  [styles.otherRowPostMobile]: isMobile,
                })}
                link={otherPost.node.fields.slug}
                photo={
                  otherPost.node.frontmatter.photo
                    ? otherPost.node.frontmatter.photo.childImageSharp.fluid
                    : null
                }
                title={otherPost.node.frontmatter.title}
                excerpt={otherPost.node.excerpt}
              />
            ))}
          </FlexContainer>
        ))}
      {isMorePosts && (
        <FlexContainer className={styles.showMore} justify="center">
          <Button onClick={() => setShowMore(true)}>Load More</Button>
        </FlexContainer>
      )}
    </>
  );
}
