import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import Layout from '../primitives/layout';

import Facebook from '../assets/icons/facebook.svg';
import LinkedIn from '../assets/icons/linked-in.svg';
import Twitter from '../assets/icons/twitter.svg';
import Instagram from '../assets/icons/Instagram.svg';

import {
  footer,
  footerMobile,
  socialLink,
  link,
  appLinkContainer,
} from './footer.module.scss';

export default function Footer() {
  const { isMobile } = useDevice();
  const { google, apple } = useStaticQuery(
    graphql`
      {
        apple: file(relativePath: { eq: "app-store-logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 155, placeholder: NONE, layout: FIXED)
          }
        }
        google: file(relativePath: { eq: "google-play-logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 155, placeholder: NONE, layout: FIXED)
          }
        }
      }
    `,
  );

  return (
    <footer className={classNames(footer, { [footerMobile]: isMobile })}>
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
                className={socialLink}
                href="https://www.facebook.com/ourlifeloop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Facebook"
              >
                <Facebook />
              </a>
              <a
                className={socialLink}
                href="https://www.linkedin.com/company/lifeloop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Linked In"
              >
                <LinkedIn />
              </a>
              <a
                className={socialLink}
                href="https://twitter.com/iN2L_LifeLoop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Twitter"
              >
                <Twitter />
              </a>
              <a
                className={socialLink}
                href="https://www.instagram.com/we_are_lifeloop/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LifeLoop Twitter"
              >
                <Instagram />
              </a>
            </FlexContainer>
            <FlexContainer>
              <a
                href="https://lifeloop.com/terms"
                className={link}
                aria-label="Terms and Conditions"
              >
                Terms & Conditions
              </a>
              <a
                href="https://lifeloop.com/privacy"
                className={link}
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </a>
              <a
                href="https://lifeloop.com/accessibility"
                className={link}
                aria-label="Accessibility Statement"
              >
                Accessibility
              </a>
              <Link className={link} to="/covid" aria-label="Covid Response">
                Covid
              </Link>
            </FlexContainer>
          </FlexContainer>
          <FlexContainer wrap>
            <a
              className={appLinkContainer}
              href="https://play.google.com/store/apps/details?id=com.lifeloopproject"
              target="_blank"
              aria-label="LifeLoop Google Play"
              rel="noopener noreferrer"
            >
              <GatsbyImage alt="Google Play" image={getImage(google)} />
            </a>
            <a
              className={appLinkContainer}
              href="https://apps.apple.com/us/app/lifeloop/id1245703605"
              target="_blank"
              aria-label="LifeLoop iOS App Store"
              rel="noopener noreferrer"
            >
              <GatsbyImage alt="iOS App Store" image={getImage(apple)} />
            </a>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </footer>
  );
}
