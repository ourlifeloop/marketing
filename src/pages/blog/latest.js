import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import FlexContainer from '../../primitives/flex-container';
import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import BlogFooter from '../../components/blog-subscriber';
import BlogRoll from '../../components/blog-roll';
import { useDevice } from '../../utils/effects';
import Layout from '../../primitives/layout';
import Button from '../../primitives/button';

import styles from './blog.module.scss';

export default ({ data, location }) => {
  const { isTablet } = useDevice();
  const { edges: posts } = data.allMarkdownRemark;
  const [featuredPost, ...latestPosts] = posts;

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
        <BlogRoll posts={latestPosts} />
      </Layout>
      <BlogFooter />
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
