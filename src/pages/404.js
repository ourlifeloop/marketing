import React from 'react';
import { Link } from 'gatsby';

import LifeloopBigLogo from '../assets/icons/lifeloop-big-logo.svg';
import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';

import styles from './404.module.scss';

export default () => {
  return (
    <FlexContainer align="center" justify="center" className={styles.container}>
      <FlexContainer direction="column">
        <h1 className={styles.title}>404</h1>
        <h2 className={styles.subTitle}>Page Not Found</h2>
        <FlexContainer align="center">
          <hr className={styles.line} />
          <LifeloopBigLogo className={styles.icon} />
          <hr className={styles.line} />
        </FlexContainer>
        <p className={styles.content}>
          We're sorry, we can't seem to find the page you were looking for.
        </p>
        <FlexContainer justify="center">
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
