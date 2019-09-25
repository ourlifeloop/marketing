import React, { useState } from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import FeatureDropdown from '../primitives/feature-dropdown';
import FlexContainer from '../primitives/flex-container';
import TRAINING_TOPICS from '../utils/training-topics';
import QuestionAndAnswer from './question-and-answer';
import VideoModal from '../primitives/video-modal';
import TrainingDocument from './training-document';
import TrainingVideo from './training-video';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import { includes } from '../utils/lodash';

import styles from './training-topic.module.scss';

export default function TrainingTopic({
  userType,
  topic,
  topics,
  videos,
  documents,
  faqs,
}) {
  const { isTablet } = useDevice();
  const [activeVideo, setActiveVideo] = useState();

  let firstTitle = 'Videos';
  if (!videos.length) {
    firstTitle = documents.length ? 'Documents' : 'Frequently Asked Questions';
  }

  return (
    <Section>
      <FlexContainer align="flexend">
        {!isTablet && (
          <h3 className={classNames(styles.leftColumn, styles.topicsHeader)}>
            TOPICS
          </h3>
        )}
        <h1 className={styles.rightColumn}>{firstTitle}</h1>
      </FlexContainer>
      <FlexContainer className={styles.content}>
        {!isTablet && (
          <FlexContainer direction="column" className={styles.leftColumn}>
            {TRAINING_TOPICS.filter(({ key }) => includes(topics, key)).map(
              ({ key, name, Icon }) => (
                <Link key={key} to={`/training/${userType}/${key}`}>
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
              ),
            )}
          </FlexContainer>
        )}
        <FlexContainer direction="column" className={styles.rightColumn}>
          <FlexContainer wrap>
            {videos.map(({ key, cover, video, title }) => (
              <TrainingVideo
                key={key}
                title={title}
                cover={cover && <Img fixed={cover.childImageSharp.fixed} />}
                onClick={link => setActiveVideo({ link: video, title })}
              />
            ))}
          </FlexContainer>
          {!!documents.length && firstTitle !== 'Documents' && (
            <h1>Documents</h1>
          )}
          <FlexContainer direction="column">
            {documents.map(({ key, title, document }) => (
              <TrainingDocument key={key} title={title} document={document} />
            ))}
          </FlexContainer>
          {!!faqs.length && firstTitle !== 'Frequently Asked Questions' && (
            <h1>Frequently Asked Questions</h1>
          )}
          <QuestionAndAnswer
            questions={faqs}
            className={styles.questionContainer}
          />
        </FlexContainer>
      </FlexContainer>
      <VideoModal
        isOpen={!!activeVideo}
        onClose={() => setActiveVideo()}
        {...(activeVideo || {})}
      />
    </Section>
  );
}
