import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

import RelativeContainer from './relative-container';
import PlayIcon from '../assets/icons/icon-play.svg';
import FlexContainer from './flex-container';

import styles from './video-button.module.scss';

export default function VideoButton({ image, text, ...rest }) {
  return (
    <FlexContainer className={styles.videoBtn} {...rest}>
      <RelativeContainer>
        <Img className={styles.videoBtnEmbed} fluid={image} />
        <PlayIcon className={styles.videoBtnIcon} />
      </RelativeContainer>
      <FlexContainer
        direction="column"
        justify="center"
        className={styles.videoBtnText}
      >
        <b>{text}</b>
        <p>Watch the Video</p>
      </FlexContainer>
    </FlexContainer>
  );
}

VideoButton.propTypes = {
  image: PropTypes.shape().isRequired,
  text: PropTypes.string.isRequired,
};
