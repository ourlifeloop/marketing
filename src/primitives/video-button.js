import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';

import RelativeContainer from './relative-container';
import PlayIcon from '../assets/icons/icon-play.svg';
import FlexContainer from './flex-container';

import {
  videoBtn,
  videoBtnEmbed,
  videoBtnIcon,
  videoBtnText,
} from './video-button.module.scss';

export default function VideoButton({ image, text, ...rest }) {
  return (
    <FlexContainer className={videoBtn} {...rest}>
      <RelativeContainer>
        <GatsbyImage alt={text} image={image} className={videoBtnEmbed} />
        <PlayIcon className={videoBtnIcon} />
      </RelativeContainer>
      <FlexContainer
        direction="column"
        justify="center"
        className={videoBtnText}
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
