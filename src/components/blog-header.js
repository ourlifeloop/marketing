import React from 'react';
import { Link } from 'gatsby';

import FlexContainer from '../primitives/flex-container';

import styles from './blog-header.module.scss';

export default () => {
  return (
    <FlexContainer
      align="center"
      justify="spacebetween"
      className={styles.container}
    >
      <h1>The Loop</h1>
      <FlexContainer align="center">
        <Link
          to="/blog/"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Latest
        </Link>
        <Link
          to="/blog/customer-spotlight/"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          Customer Spotlight
        </Link>
        <Link
          to="/blog/news/"
          className={styles.link}
          activeClassName={styles.linkActive}
        >
          News
        </Link>
      </FlexContainer>
    </FlexContainer>
  );
};
