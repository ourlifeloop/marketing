import React from 'react';
import { Link } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import Button from '../primitives/button';

// import styles from './training.module.scss';

export default ({ data }) => {
  return (
    <TrainingWrapper
      header={
        <FlexContainer direction="column" align="center">
          <TitleSection header="How Can We Help?" width="small">
            <p>
              Welcome to the LifeLoop Learning Community, built especially for
              staff members! LifeLoop makes it easy for staff to manage a
              community. However, we understand that with the many features, it
              is a learning process to properly utilize LifeLoop. This page is
              dedicated to easing your learning experience and getting
              comfortable with using LifeLoop.
            </p>
            <Link to="/training">
              <Button>New to LifeLoop? Start Here</Button>
            </Link>
          </TitleSection>
        </FlexContainer>
      }
    >
      <h1>Training</h1>
    </TrainingWrapper>
  );
};
