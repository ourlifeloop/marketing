import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import { ChevronDown } from '../utils/icons';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import { map } from '../utils/lodash';
import Layout from './layout';

import styles from './mobile-dropdown.module.scss';

export default function MobileDropdown({ isOpen }) {
  const { isMobile } = useDevice();
  const { site } = useStaticQuery(
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

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(true);
  return (
    <div
      className={classNames(styles.mobilePanel, {
        [styles.mobilePanelOpen]: isOpen,
      })}
    >
      <div className={styles.innerContainer}>
        <Layout>
          <FlexContainer direction="column">
            {map(NAVIGATION, ({ key, name, link, subNav }) => {
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
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className={styles.link}
                  direction="column"
                >
                  <FlexContainer justify="spacebetween" align="center">
                    {name}
                    <ChevronDown
                      className={classNames(styles.linkIcon, {
                        [styles.linkIconOpen]: isFeaturesOpen,
                      })}
                      size={30}
                    />
                  </FlexContainer>
                  <FlexContainer
                    className={classNames(styles.featuresContainer, {
                      [styles.featuresContainerOpen]: isFeaturesOpen,
                    })}
                    wrap
                  >
                    {map(subNav, ({ key, name, icon, link }) => (
                      <Link
                        key={key}
                        to={link}
                        className={classNames(styles.featureLink, {
                          [styles.featureLinkFullWidth]: isMobile,
                        })}
                      >
                        <FlexContainer align="center">
                          <img src={icon} alt={name} />
                          {name}
                        </FlexContainer>
                      </Link>
                    ))}
                  </FlexContainer>
                </FlexContainer>
              );
            })}
            <FlexContainer wrap>
              <a
                className={styles.minorLink}
                href="https://ourlifeloop.squarespace.com/training"
              >
                Training
              </a>
              <a
                className={styles.minorLink}
                href="https://ourlifeloop.com/login"
              >
                Login
              </a>
              <a
                className={styles.minorLink}
                href={`tel:${site.siteMetadata.phoneNumber}`}
              >
                <b>{site.siteMetadata.phoneNumber}</b>
              </a>
            </FlexContainer>
            <Link to="/demo" className={styles.requestButton}>
              <Button>Request a Demo</Button>
            </Link>
          </FlexContainer>
        </Layout>
      </div>
    </div>
  );
}

MobileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
