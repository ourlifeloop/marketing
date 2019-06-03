import React, { useState } from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { usePrevious, useDevice, useScrollPosition } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import { ChevronDown, Menu, X } from '../utils/icons';
import MobileDropdown from './mobile-dropdown';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import Layout from '../primitives/layout';
import { map } from '../utils/lodash';

import styles from './header.module.scss';

const TRANSPARENT_START_OPACITY = 0.37;
const TRANSPARENT_HEADER_END = 400;

export default function Header({ transparent, children }) {
  const { isDesktop, isMobile, isMini } = useDevice();
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
      query {
        site {
          siteMetadata {
            phoneNumber
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

  const renderDesktopLinks = () =>
    map(NAVIGATION, ({ key, name, link, subNav }) => {
      if (!subNav) {
        return (
          <Link key={key} className={styles.link} to={link}>
            {name}
          </Link>
        );
      }
      return (
        <FlexContainer
          key={key}
          className={styles.dropdownContainer}
          align="center"
        >
          {name}
          <ChevronDown size={15} />
          <div className={styles.dropdown}>
            {map(subNav, ({ key, name, Icon, link }) => (
              <Link key={key} to={link} className={styles.dropdownLink}>
                <FlexContainer align="center">
                  <Icon />
                  {name}
                </FlexContainer>
              </Link>
            ))}
          </div>
        </FlexContainer>
      );
    });

  const renderExternalLinks = () => (
    <FlexContainer>
      <a
        className={styles.minorLink}
        href="https://ourlifeloop.squarespace.com/training"
      >
        Training
      </a>
      <a className={styles.minorLink} href="https://ourlifeloop.com/login">
        Login
      </a>
    </FlexContainer>
  );

  return (
    <div className={styles.siteContainer}>
      <MobileDropdown isOpen={isNavOpen} />
      <header
        style={{
          backgroundColor: !transparent
            ? 'white'
            : `rgba(256, 256, 256, ${opacity})`,
        }}
        className={classNames(styles.header, {
          [styles.headerTransparent]: transparent,
          [styles.headerOpenNav]: isNavOpen,
          [styles.headerWithShadow]:
            transparent && scrollPosition === TRANSPARENT_HEADER_END,
        })}
      >
        <Helmet title="Senior Living Calendar and Activity Management - LifeLoop" />
        <Layout>
          <FlexContainer
            justify="spacebetween"
            className={styles.innerContainer}
          >
            <FlexContainer align="center">
              <Link className={classNames(styles.linkContainer)} to="/">
                <Img
                  fixed={logo.childImageSharp.fixed}
                  className={styles.logoLink}
                />
              </Link>
              {isDesktop && renderDesktopLinks()}
            </FlexContainer>
            <FlexContainer direction="column" justify="center" align="flexend">
              {isDesktop && renderExternalLinks()}
              <FlexContainer align="center">
                {!isMobile && (
                  <a
                    className={styles.phone}
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
                    className={classNames(styles.menuContainer, {
                      [styles.menuContainerMini]: isMini,
                    })}
                  >
                    {isNavOpen ? (
                      <X
                        className={styles.menu}
                        size={50}
                        onClick={() => setIsNavOpen(false)}
                      />
                    ) : (
                      <Menu
                        className={styles.menu}
                        size={50}
                        onClick={() => setIsNavOpen(true)}
                      />
                    )}
                  </FlexContainer>
                )}
              </FlexContainer>
            </FlexContainer>
          </FlexContainer>
        </Layout>
      </header>
      <div
        ref={containerRef}
        className={classNames(styles.contentContainer, {
          [styles.contentContainerTransparent]: transparent,
        })}
      >
        {children}
      </div>
    </div>
  );
}

Header.propTypes = {
  transparent: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  transparent: false,
};
