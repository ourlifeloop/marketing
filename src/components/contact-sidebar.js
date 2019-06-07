import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import classNames from 'classnames';
import { map } from 'lodash';

import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';
import NAVIGATION from '../utils/navigation';

import styles from './contact-sidebar.module.scss';

export default function ContactSidebar({ links }) {
  const { isTablet } = useDevice();
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            careers
          }
        }
      }
    `,
  );

  return (
    <FlexContainer direction="column">
      <div
        className={classNames(styles.infoContainer, {
          [styles.infoContainerVertical]: isTablet,
        })}
      >
        <h3>Other ways to connect with us</h3>
        {React.Children.map(links, link =>
          React.cloneElement(link, {
            className: classNames(link.className, styles.infoLink),
          }),
        )}
      </div>
      <div
        className={classNames(styles.infoContainer, {
          [styles.infoContainerVertical]: isTablet,
        })}
      >
        <h3>Interested in joining the team?</h3>
        <p>
          We care about our customers. We are problem solvers, we embrace growth
          and trust that everyone is here to foster their passion.
        </p>
        <p>
          If you are interested in applying for a position at LifeLoop, please
          send your resume to{' '}
          <a href={`mailto:${site.siteMetadata.careers}`}>
            {site.siteMetadata.careers}
          </a>
        </p>
      </div>
      <div
        className={classNames(styles.infoContainer, {
          [styles.infoContainerVertical]: isTablet,
        })}
      >
        <h3>How LifeLoop Works</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          scelerisque augue. Sed consectetur arcu sed orci hendrerit tempor.
        </p>
        {map(NAVIGATION.features.subNav, ({ key, Icon, name, link }) => (
          <Link key={key} to={link} className={styles.infoLink}>
            <FlexContainer align="center">
              <Icon className={styles.featureIcon} />
              <span className={styles.featureName}>{name}</span>
            </FlexContainer>
          </Link>
        ))}
      </div>
    </FlexContainer>
  );
}
