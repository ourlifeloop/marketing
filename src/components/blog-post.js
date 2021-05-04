import React from 'react';

import RelativeContainer from '../primitives/relative-container';
import FlexContainer from '../primitives/flex-container';
import Section from '../primitives/section';

import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linked-in.svg';
import Twitter from '../assets/icons/twitter.svg';
import Share from '../assets/icons/share.svg';

import {
  container,
  separator,
  postContent,
  socialLinks,
  socialLink,
  facebook,
  twitter,
  linkedIn,
  share,
} from './blog-post.module.scss';

export default function BlogPost({
  postUrl,
  title,
  date,
  author,
  photo,
  html,
}) {
  return (
    <Section width="medium">
      <div className={container}>
        <h1>{title}</h1>
        <p>
          {date}
          <span className={separator}>•</span>
          {author}
        </p>
        {photo}
      </div>
      <RelativeContainer className={postContent}>
        <FlexContainer direction="column" className={socialLinks}>
          <a
            className={socialLink}
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
              postUrl,
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook className={facebook} />
          </a>
          <a
            className={socialLink}
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              postUrl,
            )}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className={twitter} />
          </a>
          <a
            className={socialLink}
            href={`https://www.linkedin.com/shareArticle?mini=true&source=LifeLoop+%7C+Senior+Living+Tools&summary=${encodeURIComponent(
              title,
            )}&url=${encodeURIComponent(postUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn className={linkedIn} />
          </a>
          <a
            className={socialLink}
            href={`mailto:?subject=${encodeURIComponent(
              title,
            )}&body=${encodeURIComponent(postUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Share className={share} />
          </a>
        </FlexContainer>
        {html}
      </RelativeContainer>
    </Section>
  );
}
