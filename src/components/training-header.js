import React, { useState, useRef, useEffect } from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { LogOut } from '../utils/icons';
import { useDevice, useDimensions } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import FunBackground from '../primitives/fun-background';
import { removeTrailingSlash } from '../utils/common';
import Button from '../primitives/button';
import Layout from '../primitives/layout';

import styles from './training-header.module.scss';

export default function TrainingHeader({
  header,
  title,
  description,
  canonical,
  userType,
}) {
  const { width } = useDimensions();
  const [canvasHeight, setCanvasHeight] = useState();
  const containerRef = useRef();
  const { isMobile, isTablet } = useDevice();
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phoneNumber
            displayUrl
          }
        }
        logo: file(relativePath: { eq: "lifeloop-logo.png" }) {
          childImageSharp {
            fixed(width: 180) {
              ...GatsbyImageSharpFixed_noBase64
            }
          }
        }
      }
    `,
  );

  useEffect(() => {
    setCanvasHeight(containerRef.current.clientHeight);
  }, [width]);

  return (
    <header className={styles.header} ref={containerRef}>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {!!canonical && (
          <link
            ref="canonical"
            href={removeTrailingSlash(
              `${site.siteMetadata.displayUrl}${canonical}`,
            )}
          />
        )}
      </Helmet>
      <FunBackground
        height={canvasHeight}
        width={width}
        checkPosition={!!header}
      />
      <Layout>
        <FlexContainer direction="column">
          <FlexContainer justify="flexend">
            <Link to="/" className={styles.minorLink}>
              <FlexContainer align="center">
                Return to Website
                <LogOut className={styles.minorIcon} size={16} />
              </FlexContainer>
            </Link>
          </FlexContainer>
          <FlexContainer
            justify="spacebetween"
            className={styles.innerContainer}
          >
            <Link
              className={classNames(styles.linkContainer)}
              to={`/training/${userType}`}
              aria-label="Lifeloop Home"
            >
              <FlexContainer align="center">
                <Img
                  fixed={logo.childImageSharp.fixed}
                  className={styles.logoLink}
                />
                {!isMobile && (
                  <h2 className={styles.title}>Learning Community</h2>
                )}
              </FlexContainer>
            </Link>
            <FlexContainer direction="column" justify="center" align="flexend">
              <FlexContainer align="center">
                {!isTablet && (
                  <a
                    className={styles.phone}
                    href={`tel:${site.siteMetadata.phoneNumber}`}
                  >
                    Support: <b>{site.siteMetadata.phoneNumber}</b>
                  </a>
                )}
                <Link to="/support">
                  <Button>Request Support</Button>
                </Link>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Layout>
      {header}
    </header>
  );
}

TrainingHeader.propTypes = {
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  userType: PropTypes.string,
};

TrainingHeader.defaultProps = {
  header: null,
  title:
    'LifeLoop assisted living community management software: connecting families, residents and communities.',
  description:
    'Senior living calendar management, activity tracking, and resident engagement software used to connect families, residents, and staff. Share photos and updates and communicate through messaging to ensure personalized care to seniors in skilled nursing and assisted living.',
  canonical: '',
  userType: 'staff',
};
