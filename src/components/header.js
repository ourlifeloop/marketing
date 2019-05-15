import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import styles from './header.module.scss';

export default () => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phoneNumber
          }
        }
      }
    `,
  );

  return (
    <header className={styles.header}>
      <FlexContainer justify="spacebetween" className={styles.layout}>
        <FlexContainer align="center">
          <img className={styles.logo} src="lifeloop-logo.png" alt="Lifeloop" />
          <Link className={styles.link} to="/features">
            Features
          </Link>
          <Link className={styles.link} to="/benefits">
            Benefits
          </Link>
          <Link className={styles.link} to="/our-story">
            Our Story
          </Link>
          <Link className={styles.link} to="/blog">
            Blog
          </Link>
          <Link className={styles.link} to="/contact">
            Contact Us
          </Link>
        </FlexContainer>
        <FlexContainer direction="column" align="flexEnd">
          <FlexContainer>
            <Link className={styles.minorLink} to="/training">
              Training
            </Link>
            <a
              className={styles.minorLink}
              href="https://ourlifeloop.com/login"
            >
              Login
            </a>
          </FlexContainer>
          <FlexContainer align="center">
            <a
              className={styles.phone}
              href={`tel:${data.site.siteMetadata.phoneNumber}`}
            >
              Call us: <b>{data.site.siteMetadata.phoneNumber}</b>
            </a>
            <Button>Request a Demo</Button>
          </FlexContainer>
        </FlexContainer>
      </FlexContainer>
    </header>
  );
};
