import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';
import Section from './section';
import { useDevice } from '../utils/effects';

import styles from './image-section.module.scss';

export default function ImageSection({
  title,
  description,
  image,
  leftImage,
  rightImage,
}) {
  const { isMobile } = useDevice();

  let content;
  if (isMobile) {
    content = (
      <FlexContainer
        direction="column"
        className={classNames(styles.centered, styles.mobile)}
      >
        <Img fluid={image} />
        <h3>{title}</h3>
        <p>{description}</p>
      </FlexContainer>
    );
  } else if (leftImage) {
    content = (
      <FlexContainer align="center">
        <div className={styles.imgContainer}>
          <Img fluid={image} />
        </div>
        <FlexContainer
          flex="1"
          direction="column"
          className={styles.leftImageText}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </FlexContainer>
      </FlexContainer>
    );
  } else if (rightImage) {
    content = (
      <FlexContainer align="center">
        <FlexContainer
          flex="1"
          direction="column"
          className={styles.rightImageText}
        >
          <h3>{title}</h3>
          <p>{description}</p>
        </FlexContainer>
        <div className={styles.imgContainer}>
          <Img fluid={image} />
        </div>
      </FlexContainer>
    );
  } else {
    content = (
      <FlexContainer direction="column" className={styles.centered}>
        <h3>{title}</h3>
        <p>{description}</p>
        <Img fluid={image} />
      </FlexContainer>
    );
  }
  return <Section noTopPadding={isMobile}>{content}</Section>;
}

ImageSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.shape().isRequired,
  leftImage: PropTypes.bool,
  rightImage: PropTypes.bool,
};

ImageSection.defaultProps = {
  leftImage: false,
  rightImage: false,
};
