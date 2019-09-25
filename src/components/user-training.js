import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

import TrainingWrapper from './training-wrapper';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import TRAINING_TOPICS from '../utils/training-topics';
import { includes, startCase } from '../utils/lodash';
import Section from '../primitives/section';
import Button from '../primitives/button';

import styles from './user-training.module.scss';

const headerByUserType = userType => {
  if (userType === 'staff') {
    return (
      <FlexContainer direction="column" align="center">
        <TitleSection header="How Can We Help?" width="small">
          <p>
            Welcome to the LifeLoop Learning Community, built especially for
            staff members! LifeLoop makes it easy for staff to manage a
            community. However, we understand that with the many features, it is
            a learning process to properly utilize LifeLoop. This page is
            dedicated to easing your learning experience and getting comfortable
            with using LifeLoop.
          </p>
          <Link to={`/training/${userType}/getting-started`}>
            <Button>New to LifeLoop? Start Here</Button>
          </Link>
        </TitleSection>
      </FlexContainer>
    );
  }
  return null;
};

export default ({ data, userType, topics }) => {
  const images = useStaticQuery(graphql`
    query {
      ...trainingImages
    }
  `);

  return (
    <TrainingWrapper
      title={`LifeLoop Training - ${startCase(userType)}`}
      header={headerByUserType(userType)}
      userType={userType}
    >
      <Section width="medium">
        <h2 className={styles.topicHeader}>Browse by Topic</h2>
        <FlexContainer flex="1" wrap>
          {TRAINING_TOPICS.filter(({ key }) => includes(topics, key)).map(
            ({ key, name, image }) => (
              <Link
                key={key}
                to={`/training/${userType}/${key}`}
                className={styles.topic}
              >
                <Img fluid={images[image].childImageSharp.fluid} />
                <span>{name}</span>
              </Link>
            ),
          )}
        </FlexContainer>
      </Section>
    </TrainingWrapper>
  );
};
