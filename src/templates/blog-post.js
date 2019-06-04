import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import RelativeContainer from '../primitives/relative-container';
import FlexContainer from '../primitives/flex-container';
import SiteWrapper from '../components/site-wrapper';
import Section from '../primitives/section';

import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linked-in.svg';
import Twitter from '../assets/icons/twitter.svg';

import styles from './blog-post.module.scss';

export default function BlogPostTemplate({ data }) {
  const { markdownRemark: post, site } = data;
  const { frontmatter, html, fields } = post;
  const { title, date, author, photo } = frontmatter;
  const postUrl = `${site.siteMetadata.displayUrl}${fields.slug}`;
  return (
    <SiteWrapper>
      <Helmet title={`LifeLoop - ${title}`} />
      <Section width="medium">
        <div className={styles.container}>
          <h1>{title}</h1>
          <p>
            {date}
            <span className={styles.separator}>•</span>
            {author}
          </p>
          <Img fluid={photo.childImageSharp.fluid} />
        </div>
        <RelativeContainer className={styles.postContent}>
          <FlexContainer direction="column" className={styles.socialLinks}>
            <a
              className={styles.socialLink}
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                postUrl,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook className={styles.facebook} />
            </a>
            <a
              className={styles.socialLink}
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                postUrl,
              )}&text=${encodeURIComponent(title)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Twitter className={styles.twitter} />
            </a>
            <a
              className={styles.socialLink}
              href={`https://www.linkedin.com/shareArticle?mini=true&source=LifeLoop+%7C+Senior+Living+Tools&summary=${encodeURIComponent(
                title,
              )}&url=${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedIn className={styles.linkedIn} />
            </a>
          </FlexContainer>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </RelativeContainer>
      </Section>
    </SiteWrapper>
  );
}

export const query = graphql`
  query BlogPostByPath($postId: String!) {
    markdownRemark(id: { eq: $postId }) {
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        author
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
    site {
      siteMetadata {
        displayUrl
      }
    }
  }
`;
