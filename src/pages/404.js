import React from 'react';
import { Link } from 'gatsby';

import LifeloopBigLogo from '../assets/icons/lifeloop-big-logo.svg';
import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';

import {
  container,
  title,
  subTitle,
  line,
  icon,
  content,
} from './404.module.scss';

export default function NotFound() {
  return (
    <FlexContainer align="center" justify="center" className={container}>
      <FlexContainer direction="column">
        <h1 className={title}>404</h1>
        <h2 className={subTitle}>Page Not Found</h2>
        <FlexContainer align="center">
          <hr className={line} />
          <LifeloopBigLogo className={icon} />
          <hr className={line} />
        </FlexContainer>
        <p className={content}>
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
}
