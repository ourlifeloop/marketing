import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import TRAINING_TOPICS from '../utils/training-topics';
import Section from '../primitives/section';

import styles from './training-topic.module.scss';

export default function TrainingTemplate({ topic, videos }) {
  return (
    <Section>
      <FlexContainer align="flexend">
        <h3 className={classNames(styles.leftColumn, styles.topicsHeader)}>
          TOPICS
        </h3>
        <h1>Videos</h1>
      </FlexContainer>
      <FlexContainer className={styles.content}>
        <FlexContainer
          direction="column"
          className={classNames(styles.leftColumn, styles.topicContainer)}
        >
          {TRAINING_TOPICS.map(({ key, name, Icon }) => (
            <Link to={`/training/${key}`}>
              <FlexContainer
                key={key}
                align="center"
                className={classNames(styles.topic, {
                  [styles.topicActive]: key === topic,
                })}
              >
                <Icon className={styles.topicIcon} />
                <span className={styles.topicName}>{name}</span>
              </FlexContainer>
            </Link>
          ))}
        </FlexContainer>
        <FlexContainer direction="column">
          <h1>Documents</h1>
          <h1>Frequently Asked Questions</h1>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
}
