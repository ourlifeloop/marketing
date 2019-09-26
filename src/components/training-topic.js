import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
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
  const [activeVideo, setActiveVideo] = useState();
  const { isTablet } = useDevice();

  let firstTitle = 'Videos';
  if (!videos.length) {
    firstTitle = documents.length ? 'Documents' : 'Frequently Asked Questions';
  }

  const filteredTopics = TRAINING_TOPICS.filter(({ key }) =>
    includes(topics, key),
  );

  return (
    <Section>
      <FlexContainer
        align={isTablet ? 'flexstart' : 'flexend'}
        direction={isTablet ? 'column' : 'row'}
      >
        {!isTablet ? (
          <h3 className={classNames(styles.leftColumn, styles.topicsHeader)}>
            TOPICS
          </h3>
        ) : (
          <div className={styles.dropdownContainer}>
            <FeatureDropdown
              value={topic}
              onChange={({ value }) =>
                navigate(`/training/${userType}/${value}`)
              }
              options={filteredTopics.map(({ key, name, Icon }) => ({
                label: name,
                value: key,
                Icon,
              }))}
            />
          </div>
        )}
        <h1 className={styles.rightColumn}>{firstTitle}</h1>
      </FlexContainer>
      <FlexContainer className={styles.content}>
        {!isTablet && (
          <FlexContainer direction="column" className={styles.leftColumn}>
            {filteredTopics.map(({ key, name, Icon }) => (
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
            ))}
          </FlexContainer>
        )}
        <FlexContainer direction="column" className={styles.rightColumn}>
          <FlexContainer wrap className={styles.videoContainer}>
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
