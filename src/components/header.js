import React, { useState } from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import { usePrevious, useDevice } from '../utils/effects';
import FlexContainer from '../primitives/flex-container';
import { ChevronDown, Menu, X } from '../utils/icons';
import MobileDropdown from './mobile-dropdown';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import { map } from '../utils/lodash';
import Layout from './layout';

import styles from './header.module.scss';

export default function Header({ transparent }) {
  const { isDesktop, isMobile, isMini } = useDevice();
  const previousIsDesktop = usePrevious(isDesktop);
  const [isNavOpen, setIsNavOpen] = useState(false);

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
            {map(subNav, ({ key, name, icon, link }) => (
              <Link key={key} to={link} className={styles.dropdownLink}>
                <FlexContainer align="center">
                  <img src={icon} alt={name} />
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
    <div
      className={classNames(styles.relativeContainer, {
        [styles.relativeContainerTransparent]: transparent,
      })}
    >
      <MobileDropdown isOpen={isNavOpen} />
      <header
        className={classNames(styles.header, {
          [styles.headerTransparent]: transparent,
          [styles.headerOpenNav]: isNavOpen,
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
    </div>
  );
}

Header.propTypes = {
  transparent: PropTypes.bool,
};

Header.defaultProps = {
  transparent: false,
};
