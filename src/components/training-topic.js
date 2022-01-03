import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import FeatureDropdown from '../primitives/feature-dropdown';
import FlexContainer from '../primitives/flex-container';
import TRAINING_TOPICS from '../utils/training-topics';
import QuestionAndAnswer from './question-and-answer';
import VideoModal from '../primitives/video-modal';
import TrainingDocument from './training-document';
import { includes, sortBy } from '../utils/lodash';
import TrainingVideo from './training-video';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';

import {
  leftColumn,
  topicsHeader,
  dropdownContainer,
  rightColumn,
  topicItem,
  topicItemActive,
  topicItemContainer,
  topicIcon,
  topicName,
  videoContainer,
  questionContainer,
} from './training-topic.module.scss';

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
          <h3 className={classNames(leftColumn, topicsHeader)}>TOPICS</h3>
        ) : (
          <div className={dropdownContainer}>
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
        <h1 className={rightColumn}>{firstTitle}</h1>
      </FlexContainer>
      <FlexContainer>
        {!isTablet && (
          <FlexContainer direction="column" className={leftColumn}>
            {filteredTopics.map(({ key, name, Icon }) => (
              <Link key={key} to={`/training/${userType}/${key}`}>
                <FlexContainer
                  align="center"
                  className={classNames(topicItem, {
                    [topicItemActive]: key === topic,
                  })}
                >
                  <FlexContainer
                    alignItems="center"
                    className={topicItemContainer}
                  >
                    <Icon className={topicIcon} />
                  </FlexContainer>
                  <span className={topicName}>{name}</span>
                </FlexContainer>
              </Link>
            ))}
          </FlexContainer>
        )}
        <FlexContainer direction="column" className={rightColumn}>
          <FlexContainer wrap className={videoContainer}>
            {sortBy(videos, (vid) => (vid.isNew ? -1 : 1)).map(
              ({ key, cover, video, title, isNew }) => (
                <TrainingVideo
                  key={key}
                  isNew={isNew}
                  title={title}
                  cover={
                    cover && (
                      <GatsbyImage
                        image={cover.childImageSharp.gatsbyImageData}
                      />
                    )
                  }
                  onClick={(link) => setActiveVideo({ link: video, title })}
                />
              ),
            )}
          </FlexContainer>
          {!!documents.length && firstTitle !== 'Documents' && (
            <h1>Documents</h1>
          )}
          <FlexContainer direction="column">
            {documents.map(({ key, title, document, date }) => (
              <TrainingDocument
                key={key}
                date={date}
                title={title}
                document={document}
              />
            ))}
          </FlexContainer>
          {!!faqs.length && firstTitle !== 'Frequently Asked Questions' && (
            <h1>Frequently Asked Questions</h1>
          )}
          <QuestionAndAnswer questions={faqs} className={questionContainer} />
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
