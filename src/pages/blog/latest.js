import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import FlexContainer from '../../primitives/flex-container';
import SiteWrapper from '../../components/site-wrapper';
import ArticleCard from '../../components/article-card';
import BlogHeader from '../../components/blog-header';
import { useDevice } from '../../utils/effects';
import Layout from '../../primitives/layout';
import Button from '../../primitives/button';

import styles from './blog.module.scss';

export default ({ data, location }) => {
  const { isTablet } = useDevice();
  const { edges: posts } = data.allMarkdownRemark;
  const [featuredPost, ...latestPosts] = posts;
  const [firstPost, secondPost, ...olderPosts] = latestPosts;

  return (
    <SiteWrapper>
      <Layout>
        <BlogHeader pathname={location.pathname} />
        <FlexContainer
          direction={isTablet ? 'column' : 'row'}
          className={classNames(styles.featured, {
            [styles.featuredVertical]: isTablet,
          })}
        >
          <div className={styles.featuredPhoto}>
            <Img
              fluid={featuredPost.node.frontmatter.photo.childImageSharp.fluid}
            />
          </div>
          <FlexContainer
            flex="1"
            direction="column"
            justify="center"
            className={styles.featuredContent}
          >
            <div className={styles.featureTag}>Featured Article</div>
            <h2>{featuredPost.node.frontmatter.title}</h2>
            <p className={styles.featureExcerpt}>{featuredPost.node.excerpt}</p>
            <Link to={featuredPost.node.fields.slug}>
              <Button>Read More</Button>
            </Link>
          </FlexContainer>
        </FlexContainer>
        <h2>The Latest Articles</h2>
        <FlexContainer className={styles.postContainer}>
          <ArticleCard
            className={styles.firstRowPost}
            link={firstPost.node.fields.slug}
            photo={firstPost.node.frontmatter.photo.childImageSharp.fluid}
            title={firstPost.node.frontmatter.title}
            excerpt={firstPost.node.excerpt}
          />
          <ArticleCard
            className={styles.firstRowPost}
            link={secondPost.node.fields.slug}
            photo={secondPost.node.frontmatter.photo.childImageSharp.fluid}
            title={secondPost.node.frontmatter.title}
            excerpt={secondPost.node.excerpt}
          />
        </FlexContainer>
      </Layout>
    </SiteWrapper>
  );
};

export const query = graphql`
  query BlogRollQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
                fluid(maxHeight: 700) {
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
