import React, { useState, useRef, useEffect } from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
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

import {
  headerItem,
  minorLink,
  minorIcon,
  innerContainer,
  linkContainer,
  logoLink,
  phone,
  titleItem,
} from './training-header.module.scss';

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
      {
        site {
          siteMetadata {
            phoneNumber
            displayUrl
          }
        }
        logo: file(relativePath: { eq: "lifeloop-logo.png" }) {
          childImageSharp {
            gatsbyImageData(width: 190, placeholder: NONE, layout: FIXED)
          }
        }
      }
    `,
  );

  useEffect(() => {
    setCanvasHeight(containerRef.current.clientHeight);
  }, [width]);

  return (
    <header className={headerItem} ref={containerRef}>
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
            <a href="https://lifeloop.com" className={minorLink}>
              <FlexContainer align="center">
                Return to Website
                <LogOut className={minorIcon} size={16} />
              </FlexContainer>
            </a>
          </FlexContainer>
          <FlexContainer justify="spacebetween" className={innerContainer}>
            <Link
              className={classNames(linkContainer)}
              to={`/training/${userType}`}
              aria-label="LifeLoop Home"
            >
              <FlexContainer align="center">
                <GatsbyImage
                  image={logo.childImageSharp.gatsbyImageData}
                  className={logoLink}
                />
                {!isMobile && <h2 className={titleItem}>Learning Community</h2>}
              </FlexContainer>
            </Link>
            <FlexContainer direction="column" justify="center" align="flexend">
              <FlexContainer align="center">
                {!isTablet && (
                  <a
                    className={phone}
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
    'Technology solutions to enhance the lives of residents, family members and the staff who care for them.',
  canonical: '',
  userType: 'staff',
};
