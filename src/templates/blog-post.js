import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import SiteWrapper from '../components/site-wrapper';
import Section from '../primitives/section';

import styles from './blog-post.module.scss';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post } = data;
  console.log(post.frontmatter.photo.childImageSharp.fluid);
  return (
    <SiteWrapper>
      <Helmet title={`LifeLoop - ${post.frontmatter.title}`} />
      <Section width="medium">
        <div className={styles.container}>
          <h1>{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
          <Img fluid={post.frontmatter.photo.childImageSharp.fluid} />
        </div>
        <div
          className={styles.postContent}
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </Section>
    </SiteWrapper>
  );
}

export const query = graphql`
  query BlogPostByPath($postId: String!) {
    markdownRemark(id: { eq: $postId }) {
      html
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        photo {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    }
  }
`;
