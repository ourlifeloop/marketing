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
  ...rest
}) {
  const { isMobile } = useDevice();

  let content;
  if (leftImage && !isMobile) {
    content = (
      <FlexContainer align="center">
        <div className={styles.imgContainer}>
          <Img
            fluid={image}
            className={styles.img}
            style={{
              maxWidth: image.presentationWidth,
              margin: '0 auto',
            }}
          />
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
  } else if (rightImage && !isMobile) {
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
          <Img
            fluid={image}
            className={styles.img}
            style={{
              maxWidth: image.presentationWidth,
              margin: '0 auto',
            }}
          />
        </div>
      </FlexContainer>
    );
  } else {
    content = (
      <FlexContainer direction="column" className={classNames(styles.centered)}>
        <Img
          fluid={image}
          className={styles.img}
          styles={{
            maxWidth: image.presentationWidth,
            margin: '0 auto',
          }}
        />
        <h3>{title}</h3>
        <p>{description}</p>
      </FlexContainer>
    );
  }
  return (
    <Section noTopPadding={isMobile} {...rest}>
      {content}
    </Section>
  );
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
