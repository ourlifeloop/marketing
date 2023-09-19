import React, { useState } from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { usePrevious, useDevice, useScrollPosition } from '../utils/effects';
import { ArrowRight, ChevronDown, Menu, X } from '../utils/icons';
import FlexContainer from '../primitives/flex-container';
import { removeTrailingSlash } from '../utils/common';
import MobileDropdown from './mobile-dropdown';
import { map, values } from '../utils/lodash';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import Layout from '../primitives/layout';

import {
  dropdownContainer,
  flexLink,
  dropdown,
  dropdownLink,
  dropdownLinkName,
  minorLink,
  bannerInner,
  bannerLink,
  bannerIcon,
  siteContainer,
  header,
  headerTransparent,
  headerBannerOffset,
  headerOpenNav,
  headerWithShadow,
  innerContainer,
  linkContainer,
  linkElement,
  logoLink,
  phone,
  menuContainer,
  menuContainerMini,
  menu,
  contentContainer,
} from './header.module.scss';

const TRANSPARENT_START_OPACITY = 0.37;
const TRANSPARENT_HEADER_END = 400;

export default function Header({
  transparent,
  children,
  title,
  description,
  canonical,
  banner,
}) {
  const { isDesktop, isTablet, isMobile, isMini } = useDevice();
  const previousIsDesktop = usePrevious(isDesktop);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [containerRef, scrollPosition] = useScrollPosition({
    lessThan: TRANSPARENT_HEADER_END,
  });

  const opacity =
    TRANSPARENT_START_OPACITY +
    (1 - TRANSPARENT_START_OPACITY) * (scrollPosition / TRANSPARENT_HEADER_END);

  if (!previousIsDesktop && isDesktop && isNavOpen) {
    setIsNavOpen(false);
  }

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
            gatsbyImageData(width: 190, placeholder: NONE, layout: CONSTRAINED)
          }
        }
      }
    `,
  );

  const renderDesktopLinks = () =>
    map(NAVIGATION, ({ key, name, link, subNav }) => {
      if (!subNav) {
        return (
          <Link key={key} className={linkElement} to={link} aria-label={name}>
            {name}
          </Link>
        );
      }
      return (
        <FlexContainer key={key} className={dropdownContainer} align="center">
          <Link className={flexLink} to={values(subNav)[0].link}>
            {name}
            <ChevronDown size={15} />
          </Link>
          <div className={dropdown}>
            {map(subNav, ({ key, name, Icon, link }) => (
              <Link
                key={key}
                to={link}
                className={dropdownLink}
                aria-label={name}
              >
                <FlexContainer align="center">
                  {!!Icon && <Icon />}
                  <span className={dropdownLinkName}>{name}</span>
                </FlexContainer>
              </Link>
            ))}
          </div>
        </FlexContainer>
      );
    });

  const renderExternalLinks = () => (
    <FlexContainer justify="flexend">
      <Link
        className={minorLink}
        aria-label="LifeLoop Training"
        to="/training/staff"
      >
        Training
      </Link>
      <a
        className={minorLink}
        aria-label="LifeLoop Login"
        target="_blank"
        rel="noopener noreferrer"
        href="https://lifeloopapp.com/login"
      >
        Login
      </a>
    </FlexContainer>
  );

  let mobileOffset = 90;
  let contentOffset = isTablet ? 81 : 100;
  if (transparent) {
    contentOffset = 0;
  }

  let headerBanner;
  if (banner) {
    contentOffset += 40;
    mobileOffset += 40;
    headerBanner = (
      <Link to={banner.link} className={bannerLink}>
        <FlexContainer align="center" justify="center" className={bannerInner}>
          {banner.text}
          <ArrowRight className={bannerIcon} size={18} />
        </FlexContainer>
      </Link>
    );
  }

  return (
    <div className={siteContainer}>
      <MobileDropdown isOpen={isNavOpen} offset={mobileOffset} />
      {headerBanner}
      <header
        style={{
          backgroundColor: !transparent
            ? 'white'
            : `rgba(256, 256, 256, ${opacity})`,
        }}
        className={classNames(header, {
          [headerTransparent]: transparent,
          [headerBannerOffset]: headerBanner,
          [headerOpenNav]: isNavOpen,
          [headerWithShadow]:
            transparent && scrollPosition === TRANSPARENT_HEADER_END,
        })}
      >
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta
            name="google-site-verification"
            content="o1Ya0tLsHFKRpZ1wv7j4r96iQJJvU-H8qkMCK6ZBqpo"
          />
          {!!canonical && (
            <link
              ref="canonical"
              href={removeTrailingSlash(
                `${site.siteMetadata.displayUrl}${canonical}`,
              )}
            />
          )}
          <script
            type="text/javascript"
            id="hs-script-loader"
            key="gatsby-plugin-hubspot"
            src={`//js.hs-scripts.com/8341689.js`}
          />
        </Helmet>
        <Layout>
          <FlexContainer direction="column">
            {isDesktop && renderExternalLinks()}
            <FlexContainer justify="spacebetween" className={innerContainer}>
              <FlexContainer align="center">
                <Link
                  className={classNames(linkContainer)}
                  to="/"
                  aria-label="LifeLoop Home"
                >
                  <GatsbyImage
                    alt="LifeLoop, LLC"
                    image={getImage(logo)}
                    className={logoLink}
                  />
                </Link>
                {isDesktop && renderDesktopLinks()}
              </FlexContainer>
              <FlexContainer
                direction="column"
                justify="center"
                align="flexend"
              >
                <FlexContainer align="center">
                  {!isMobile && (
                    <a
                      className={phone}
                      href={`tel:${site.siteMetadata.phoneNumber}`}
                    >
                      Call us: <b>{site.siteMetadata.phoneNumber}</b>
                    </a>
                  )}
                  {!isMini && (
                    <Link to="/demo">
                      <Button>Request a Demo</Button>
                    </Link>
                  )}
                  {!isDesktop && (
                    <FlexContainer
                      align="center"
                      className={classNames(menuContainer, {
                        [menuContainerMini]: isMini,
                      })}
                    >
                      {isNavOpen ? (
                        <X
                          className={menu}
                          size={50}
                          onClick={() => setIsNavOpen(false)}
                        />
                      ) : (
                        <Menu
                          className={menu}
                          size={50}
                          onClick={() => setIsNavOpen(true)}
                        />
                      )}
                    </FlexContainer>
                  )}
                </FlexContainer>
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </Layout>
      </header>
      <div
        ref={containerRef}
        style={{ top: contentOffset }}
        className={contentContainer}
      >
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  canonical: PropTypes.string,
  banner: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
};

Header.defaultProps = {
  transparent: false,
  title:
    'LifeLoop assisted living community management software: connecting families, residents and communities.',
  description:
    'Technology solutions to enhance the lives of residents, family members and the staff who care for them.',
  canonical: '',
  banner: undefined,
};
