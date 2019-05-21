import React, { useEffect, useState, useRef } from 'react';
import Img from 'gatsby-image';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { ChevronDown, Menu, X } from '../utils/icons';
import { usePrevious, useDevice } from '../utils/effects';
import Button from '../primitives/button';
import Layout from './layout';

import calendar from '../assets/calendar.svg';
import family from '../assets/family.svg';
import maintenance from '../assets/maintenance.svg';
import messages from '../assets/messages.svg';
import photos from '../assets/photos.svg';
import reports from '../assets/reports.svg';
import residents from '../assets/residents.svg';
import transportation from '../assets/transportation.svg';

import styles from './header.module.scss';

export default function Header({ backgroundImage, children }) {
  const mobilePanel = useRef(null);
  const { isDesktop, isMobile } = useDevice();
  const previousIsDesktop = usePrevious(isDesktop);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    mobilePanel.current.style.top = `-${mobilePanel.current.clientHeight}px`;
    setTimeout(() => {
      mobilePanel.current.style.transition = 'all 0.2s linear';
    }, 1);
  }, []);

  const onOpenPanel = () => {
    mobilePanel.current.style.top = null;
    setIsNavOpen(true);
  };

  const onClosePanel = () => {
    mobilePanel.current.style.top = `-${mobilePanel.current.clientHeight}px`;
    setIsNavOpen(false);
  };

  if (!previousIsDesktop && isDesktop && isNavOpen) {
    onClosePanel();
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

  const renderDesktopLinks = () => (
    <>
      <FlexContainer className={styles.dropdownContainer} align="center">
        Features
        <ChevronDown size={15} />
        <div className={styles.dropdown}>
          <Link to="/features/activities" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={calendar} alt="Activity Calendar Feature" />
              Activity Calendar
            </FlexContainer>
          </Link>
          <Link
            to="/features/resident-management"
            className={styles.dropdownLink}
          >
            <FlexContainer align="center">
              <img src={reports} alt="Resident Management Feature" />
              Resident Management
            </FlexContainer>
          </Link>
          <Link to="/features/messaging" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={messages} alt="Messaging Feature" />
              Messaging
            </FlexContainer>
          </Link>
          <Link to="/features/transportation" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={transportation} alt="Transportation Feature" />
              Transportation
            </FlexContainer>
          </Link>
          <Link to="/features/maintenance" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={maintenance} alt="Maintenance Feature" />
              Maintenance
            </FlexContainer>
          </Link>
          <Link to="/features/resident-portal" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={residents} alt="Resident Portal Feature" />
              Resident Portal
            </FlexContainer>
          </Link>
          <Link to="/features/family-portal" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={family} alt="Family Portal Feature" />
              Family Portal
            </FlexContainer>
          </Link>
          <Link to="/features/photos" className={styles.dropdownLink}>
            <FlexContainer align="center">
              <img src={photos} alt="Photos Feature" />
              Photos
            </FlexContainer>
          </Link>
        </div>
      </FlexContainer>
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
    </>
  );

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

  const renderMobilePanel = () => (
    <div
      ref={mobilePanel}
      className={classNames(styles.mobilePanel, {
        [styles.mobilePanelOpen]: isNavOpen,
      })}
    />
  );

  const header = (
    <header
      className={classNames(styles.header, {
        [styles.headerImg]: backgroundImage,
        [styles.headerOpenNav]: isNavOpen,
      })}
    >
      <Helmet title="Senior Living Calendar and Activity Management - LifeLoop" />
      <Layout>
        <FlexContainer justify="spacebetween" className={styles.innerContainer}>
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
              <Link to="/demo">
                <Button>Request a Demo</Button>
              </Link>
              {!isDesktop && (
                <FlexContainer align="center" className={styles.menuContainer}>
                  {isNavOpen ? (
                    <X
                      className={styles.menu}
                      size={50}
                      onClick={onClosePanel}
                    />
                  ) : (
                    <Menu
                      className={styles.menu}
                      size={50}
                      onClick={onOpenPanel}
                    />
                  )}
                </FlexContainer>
              )}
            </FlexContainer>
          </FlexContainer>
        </FlexContainer>
      </Layout>
    </header>
  );

  if (!backgroundImage) {
    return (
      <div className={styles.relativeContainer}>
        {!isDesktop && renderMobilePanel()}
        {header}
      </div>
    );
  }

  return (
    <div className={styles.relativeContainer}>
      <Img className={styles.heroImage} fluid={backgroundImage} />
      {!isDesktop && renderMobilePanel()}
      {header}
      <div className={styles.childContainer}>{children}</div>
    </div>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  backgroundImage: PropTypes.shape({
    src: PropTypes.string,
    srcSet: PropTypes.string,
    originalName: PropTypes.string,
  }),
};

Header.defaultProps = {
  children: undefined,
  backgroundImage: undefined,
};
