import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import HeroImage from '../primitives/hero-image';
import NAVIGATION from '../utils/navigation';
import Layout from '../primitives/layout';
import { map } from '../utils/lodash';

import styles from './feature-header.module.scss';

export default () => {
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
    </>
  );
};
