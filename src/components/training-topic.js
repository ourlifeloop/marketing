import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import TRAINING_TOPICS from '../utils/training-topics';
import TrainingVideo from './training-video';
import Section from '../primitives/section';

import styles from './training-topic.module.scss';

export default function TrainingTopic({ topic, videos }) {
  console.log(videos);
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
            <Link key={key} to={`/training/${key}`}>
              <FlexContainer
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
        <FlexContainer direction="column" className={styles.rightColumn}>
          <FlexContainer wrap>
            {videos.map(({ cover, ...video }) => (
              <TrainingVideo
                cover={cover && <Img fixed={cover.childImageSharp.fixed} />}
                {...video}
              />
            ))}
          </FlexContainer>
          <h1>Documents</h1>
          <h1>Frequently Asked Questions</h1>
        </FlexContainer>
      </FlexContainer>
    </Section>
  );
}
