import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from '../primitives/flex-container';
import styles from './training-video.module.scss';
import PlayIcon from '../assets/icons/icon-play.svg';

export default function TrainingVideo({ cover, title, isNew, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      {cover}
      <PlayIcon className={styles.play} />
      <div className={styles.title}>{title}</div>
      {isNew && (
        <FlexContainer align="center" justify="center" className={styles.new}>
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
