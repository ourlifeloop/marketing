import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Link, useStaticQuery, graphql, navigate } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import { removeTrailingSlash } from '../utils/common';
import HeroImage from '../primitives/hero-image';
import NAVIGATION from '../utils/navigation';
import { map, find } from '../utils/lodash';
import Layout from '../primitives/layout';

import styles from './feature-header.module.scss';
import { useDevice } from '../utils/effects';

const FEATURE_OPTIONS = map(
  NAVIGATION.features.subNav,
  ({ name, link, Icon }) => ({
    value: link,
    label: name,
    Icon,
  }),
);

const FeatureOption = ({ innerProps, children, data, ...rest }) => {
  const { Icon } = data;
  return (
    <FlexContainer {...innerProps} align="center" className={styles.option}>
      <Icon className={styles.optionIcon} />
      <b>{children}</b>
    </FlexContainer>
  );
};

export default function FeatureHeader({ pathname }) {
  const { isTablet } = useDevice();
  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "features-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2000) {
              ...GatsbyImageSharpFluid
              presentationWidth
            }
          }
        }
      }
    `,
  );

  let subNav;
  if (isTablet) {
    subNav = (
      <FlexContainer justify="center">
        <Select
          isSearchable={false}
          className={styles.select}
          options={FEATURE_OPTIONS}
          value={find(FEATURE_OPTIONS, {
            value: removeTrailingSlash(pathname),
          })}
          onChange={({ value }) => navigate(value)}
          components={{ Option: FeatureOption, SingleValue: FeatureOption }}
        />
      </FlexContainer>
    );
  } else {
    subNav = (
      <div className={styles.container}>
        <Layout>
          <FlexContainer>
            {map(
              NAVIGATION.features.subNav,
              ({ key, Icon, shortName, name, link }) => (
                <Link
                  key={key}
                  to={link}
                  partiallyActive
                  className={styles.link}
                  activeClassName={styles.linkActive}
                >
                  <FlexContainer direction="column" align="center">
                    <Icon className={styles.icon} />
                    <span className={styles.name}>{shortName || name}</span>
                  </FlexContainer>
                </Link>
              ),
            )}
          </FlexContainer>
        </Layout>
      </div>
    );
  }

  return (
    <>
      <HeroImage
        direction="right"
        height="400px"
        objectPosition="30% 85%"
        image={hero.childImageSharp.fluid}
        title="Enhancing Resident & Family Engagement Through Technology"
        description="Adapting technology solutions in a way to enhance the lives of
        resident and the staff members and family who care for them. LifeLoop
        is your full-service senior living solution."
      />
      {subNav}
    </>
  );
}

FeatureHeader.propTypes = {
  pathname: PropTypes.string.isRequired,
};
