import React from 'react';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import FlexContainer from '../../primitives/flex-container';
import SiteWrapper from '../../components/site-wrapper';
import BlogHeader from '../../components/blog-header';
import BlogFooter from '../../components/blog-subscriber';
import BlogRoll from '../../components/blog-roll';
import { useDevice } from '../../utils/effects';
import Layout from '../../primitives/layout';
import Button from '../../primitives/button';

import {
  featured,
  featuredVertical,
  featuredPhoto,
  featuredContent,
  featureTag,
  featureExcerpt,
  rollTitle,
} from './blog.module.scss';

export default function LatestBlog({ data, location }) {
  const { isTablet } = useDevice();
  const { edges: posts } = data.allMarkdownRemark;
  const [featuredPost, ...latestPosts] = posts;

  return (
    <SiteWrapper title="Blog | LifeLoop assisted living community management software">
      <Layout>
        <BlogHeader pathname={location.pathname} />
        <FlexContainer
          direction={isTablet ? 'column' : 'row'}
          className={classNames(featured, {
            [featuredVertical]: isTablet,
          })}
        >
          {featuredPost.node.frontmatter.photo && (
            <div className={featuredPhoto}>
              <GatsbyImage
                alt={featuredPost.node.frontmatter.title}
                image={getImage(featuredPost.node.frontmatter.photo)}
              />
            </div>
          )}
          <FlexContainer
            flex="1"
            direction="column"
            justify="center"
            className={featuredContent}
          >
            <div className={featureTag}>Featured Article</div>
            <h2>{featuredPost.node.frontmatter.title}</h2>
            <p className={featureExcerpt}>{featuredPost.node.excerpt}</p>
            <Link to={featuredPost.node.fields.slug}>
              <Button>Read More</Button>
            </Link>
          </FlexContainer>
        </FlexContainer>
      </Layout>
      <BlogFooter />
      <Layout>
        <h2 className={rollTitle}>The Latest Articles</h2>
        <BlogRoll posts={latestPosts} />
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { fields: { slug: { regex: "^/blog/" } } }
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
                gatsbyImageData(height: 500, quality: 90, layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`;
