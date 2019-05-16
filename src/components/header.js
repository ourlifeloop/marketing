import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import Layout from './layout';

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
      <Layout>
        <FlexContainer justify="spacebetween">
          <FlexContainer align="center">
            <Link className={styles.linkContainer} to="/">
              <img
                className={styles.logo}
                src="/lifeloop-logo.png"
                alt="Lifeloop"
              />
            </Link>
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
          <FlexContainer direction="column" align="flexend">
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
              <Link to="/demo">
                <Button>Request a Demo</Button>
              </Link>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </header>
  );
};
