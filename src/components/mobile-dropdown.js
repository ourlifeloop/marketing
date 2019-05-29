import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { ChevronDown } from '../utils/icons';
import NAVIGATION from '../utils/navigation';
import { map } from '../utils/lodash';
import Layout from './layout';

import styles from './mobile-dropdown.module.scss';

export default function MobileDropdown({ isOpen }) {
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
                      <Link key={key} to={link} className={styles.featureLink}>
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
          </FlexContainer>
        </Layout>
      </div>
    </div>
  );
}

MobileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
