import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useStaticQuery, graphql, navigate } from 'gatsby';

import FeatureDropdown from '../primitives/feature-dropdown';
import FlexContainer from '../primitives/flex-container';
import { map, startsWith } from '../utils/lodash';
import HeroImage from '../primitives/hero-image';
import NAVIGATION from '../utils/navigation';
import Layout from '../primitives/layout';

import styles from './feature-header.module.scss';
import { useDevice } from '../utils/effects';

const FEATURE_OPTIONS = map(
  NAVIGATION.features.subNav,
  ({ name, link, Icon }) => ({
    value: `${link}#features`,
    label: name,
    Icon,
  }),
);

export default function FeatureHeader({ pathname }) {
  const { isTablet } = useDevice();
  const { hero } = useStaticQuery(
    graphql`
      query {
        hero: file(relativePath: { eq: "features-hero.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
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
      <FlexContainer justify="center" id="features">
        <FeatureDropdown
          value={pathname}
          options={FEATURE_OPTIONS}
          onChange={({ value }) => navigate(value)}
        />
      </FlexContainer>
    );
  } else {
    subNav = (
      <div className={styles.container} id="features">
        <Layout>
          <FlexContainer>
            {map(
              NAVIGATION.features.subNav,
              ({ key, Icon, shortName, name, link }) => (
                <Link
                  key={key}
                  to={`${link}#features`}
                  className={classNames(styles.link, {
                    [styles.linkActive]: startsWith(pathname, link),
                  })}
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
        objectPosition="30% 92%"
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
