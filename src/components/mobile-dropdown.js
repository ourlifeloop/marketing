import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import { ChevronDown } from '../utils/icons';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import Layout from '../primitives/layout';
import { map } from '../utils/lodash';

import {
  mobilePanel,
  mobilePanelOpen,
  innerContainer,
  layout,
  linkItem,
  linkIcon,
  linkIconOpen,
  featuresContainer,
  featuresContainerOpen,
  featureLink,
  featureLinkFullWidth,
  minorLink,
  requestButton,
} from './mobile-dropdown.module.scss';

export default function MobileDropdown({ isOpen, offset }) {
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
      className={classNames(mobilePanel, {
        [mobilePanelOpen]: isOpen,
      })}
    >
      <div className={innerContainer} style={{ paddingTop: offset }}>
        <Layout>
          <FlexContainer direction="column" className={layout}>
            {map(NAVIGATION, ({ key, name, link, subNav }) => {
              if (!subNav) {
                return (
                  <Link key={key} className={linkItem} to={link}>
                    {name}
                  </Link>
                );
              }
              return (
                <FlexContainer
                  key={key}
                  onClick={() => setIsFeaturesOpen(!isFeaturesOpen)}
                  className={link}
                  direction="column"
                >
                  <FlexContainer justify="spacebetween" align="center">
                    {name}
                    <ChevronDown
                      className={classNames(linkIcon, {
                        [linkIconOpen]: isFeaturesOpen,
                      })}
                      size={30}
                    />
                  </FlexContainer>
                  <FlexContainer
                    className={classNames(featuresContainer, {
                      [featuresContainerOpen]: isFeaturesOpen,
                    })}
                    wrap
                  >
                    {map(subNav, ({ key, name, Icon, link }) => (
                      <Link
                        key={key}
                        to={link}
                        className={classNames(featureLink, {
                          [featureLinkFullWidth]: isMobile,
                        })}
                      >
                        <FlexContainer align="center">
                          <Icon />
                          {name}
                        </FlexContainer>
                      </Link>
                    ))}
                  </FlexContainer>
                </FlexContainer>
              );
            })}
            <FlexContainer wrap>
              <Link className={minorLink} to="/training/staff">
                Training
              </Link>
              <a className={minorLink} href="https://lifeloopapp.com/login">
                Login
              </a>
              <a
                className={minorLink}
                href={`tel:${site.siteMetadata.phoneNumber}`}
              >
                <b>{site.siteMetadata.phoneNumber}</b>
              </a>
            </FlexContainer>
            <Link to="/demo" className={requestButton}>
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
  offset: PropTypes.number.isRequired,
};
