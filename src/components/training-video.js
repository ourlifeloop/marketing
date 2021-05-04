import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../primitives/flex-container';
import PlayIcon from '../assets/icons/icon-play.svg';

import {
  container,
  play,
  titleContainer,
  newContainer,
} from './training-video.module.scss';

export default function TrainingVideo({ cover, title, isNew, ...rest }) {
  return (
    <div className={container} {...rest}>
      {cover}
      <PlayIcon className={play} />
      <div className={titleContainer}>{title}</div>
      {isNew && (
        <FlexContainer align="center" justify="center" className={newContainer}>
          New!
        </FlexContainer>
      )}
    </div>
  );
}

TrainingVideo.propTypes = {
  cover: PropTypes.shape(),
  title: PropTypes.string.isRequired,
  isNew: PropTypes.bool,
};

TrainingVideo.defaultProps = {
  isNew: false,
};
