import React from 'react';

import RelativeContainer from '../primitives/relative-container';
import FlexContainer from '../primitives/flex-container';
import Section from '../primitives/section';

import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linked-in.svg';
import Twitter from '../assets/icons/twitter.svg';
import Share from '../assets/icons/share.svg';

import styles from './blog-post.module.scss';

export default function BlogPostTemplate({
  postUrl,
  helmet,
  title,
  date,
  author,
  photo,
  html,
}) {
  return (
    <>
      {helmet}
      <Section width="medium">
        <div className={styles.container}>
          <h1>{title}</h1>
          <p>
            {date}
            <span className={styles.separator}>•</span>
            {author}
          </p>
          {photo}
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
            <a
              className={styles.socialLink}
              href={`mailto:?subject=${encodeURIComponent(
                title,
              )}&body=${encodeURIComponent(postUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Share className={styles.share} />
            </a>
          </FlexContainer>
          {html}
        </RelativeContainer>
      </Section>
    </>
  );
}
