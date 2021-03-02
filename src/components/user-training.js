import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql, useStaticQuery } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import TRAINING_TOPICS from '../utils/training-topics';
import { includes, startCase } from '../utils/lodash';
import QuestionAndAnswer from './question-and-answer';
import TrainingWrapper from './training-wrapper';
import Section from '../primitives/section';
import Button from '../primitives/button';

import styles from './user-training.module.scss';

const headerByUserType = userType => {
  if (userType === 'staff') {
    return 'Welcome to the LifeLoop Learning Community, built especially for staff members! LifeLoop makes it easy for staff to manage a community. However, we understand that with the many features, it is a learning process to properly utilize LifeLoop. This page is dedicated to easing your learning experience and getting comfortable with using LifeLoop.';
  } else if (userType === 'family') {
    return 'Welcome to the LifeLoop Learning Community, built especially for family members! LifeLoop makes it easy for you to stay connected with your loved one and learn more about their daily activities. This page is dedicated to helping you learn the LifeLoop platform and answer any questions you may have.';
  }
  return 'Welcome to the LifeLoop Learning Community, built especially for residents! This page is dedicated to helping you get comfortable with using LifeLoop. Below you will be able to browse by topic, view FAQ’s and more. If you have any questions, please feel free to contact us at the phone number above or ask a community staff member for assistance.';
};

export default ({ userType, topics, faqs }) => {
  const images = useStaticQuery(graphql`
    query {
      ...trainingImages
    }
  `);

  return (
    <TrainingWrapper
      title={`LifeLoop Training - ${startCase(userType)}`}
      header={
        <FlexContainer direction="column" align="center">
          <TitleSection header="How Can We Help?" width="small">
            <p>{headerByUserType(userType)}</p>
            <Link to={`/training/${userType}/getting-started`}>
              <Button>New to LifeLoop? Start Here</Button>
            </Link>
          </TitleSection>
        </FlexContainer>
      }
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
      {!!faqs.length && (
        <TitleSection header="Frequently Asked Questions">
          <QuestionAndAnswer questions={faqs} />
        </TitleSection>
      )}
    </TrainingWrapper>
  );
};
