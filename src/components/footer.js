import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import Layout from '../primitives/layout';

import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linked-in.svg';
import Twitter from '../assets/icons/twitter.svg';

import styles from './footer.module.scss';

export default function Footer() {
  const { isMobile } = useDevice();
  const { google, apple } = useStaticQuery(
    graphql`
      query {
        apple: file(relativePath: { eq: "app-store-logo.png" }) {
          childImageSharp {
            fixed(width: 155) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
        google: file(relativePath: { eq: "google-play-logo.png" }) {
          childImageSharp {
            fixed(width: 155) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `,
  );

  return (
    <footer
      className={classNames(styles.footer, { [styles.footerMobile]: isMobile })}
    >
      <Layout>
        <FlexContainer
          justify="spacebetween"
          align="center"
          direction={isMobile ? 'column' : 'row'}
        >
          <FlexContainer
            direction="column"
            align={isMobile ? 'center' : 'flexstart'}
          >
            <FlexContainer>
              <a
                className={styles.socialLink}
                href="https://twitter.com/ourlifeloop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Twitter"
              >
                <Twitter />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/ourlifeloop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Facebook"
              >
                <Facebook />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/company/lifeloop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Linked In"
              >
                <LinkedIn />
              </a>
            </FlexContainer>
            <FlexContainer>
              <Link
                className={styles.link}
                to="/terms"
                aria-label="Terms & Conditions"
              >
                Terms & Conditions
              </Link>
              <Link
                className={styles.link}
                to="/privacy"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer wrap>
            <a
              className={styles.appLinkContainer}
              href="https://play.google.com/store/apps/details?id=com.lifeloopproject"
              target="_blank"
              aria-label="LifeLoop Google Play"
              rel="noopener noreferrer"
            >
              <Img fixed={google.childImageSharp.fixed} />
            </a>
            <a
              className={styles.appLinkContainer}
              href="https://appstore.com/lifeloopforiphone"
              target="_blank"
              aria-label="LifeLoop iOS App Store"
              rel="noopener noreferrer"
            >
              <Img fixed={apple.childImageSharp.fixed} />
            </a>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </footer>
  );
}
