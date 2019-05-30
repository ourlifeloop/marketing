import React from 'react';
import Img from 'gatsby-image';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import Layout from './layout';
import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import { Facebook, LinkedIn, Twitter } from '../utils/icons';

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
    <footer className={styles.footer}>
      <Layout>
        <FlexContainer
          justify="spacebetween"
          align={isMobile ? 'flexstart' : 'center'}
          direction={isMobile ? 'column' : 'row'}
        >
          <FlexContainer direction="column">
            <FlexContainer>
              <a
                className={styles.socialLink}
                href="https://twitter.com/ourlifeloop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.facebook.com/ourlifeloop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                className={styles.socialLink}
                href="https://www.linkedin.com/company/lifeloop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedIn size={20} />
              </a>
            </FlexContainer>
            <FlexContainer>
              <Link className={styles.link} to="/terms">
                Terms of Service
              </Link>
              <Link className={styles.link} to="/privacy">
                Privacy Statement
              </Link>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer wrap>
            <a
              className={styles.appLinkContainer}
              href="https://play.google.com/store/apps/details?id=com.lifeloopproject"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={classNames(styles.appLinkImg, {
                  [styles.appLinkImgMobile]: isMobile,
                })}
                fixed={google.childImageSharp.fixed}
              />
            </a>
            <a
              className={styles.appLinkContainer}
              href="https://appstore.com/lifeloopforiphone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Img
                className={classNames(styles.appLinkImg, {
                  [styles.appLinkImgMobile]: isMobile,
                })}
                fixed={apple.childImageSharp.fixed}
              />
            </a>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </footer>
  );
}
