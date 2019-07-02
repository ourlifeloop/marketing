import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';

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
  if (isMobile || !(leftImage || rightImage)) {
    return (
      <>
        <Section noTopPadding={!isMobile} noBottomPadding {...rest}>
          <FlexContainer direction="column">
            <Img
              fluid={image}
              className={styles.img}
              styles={{
                maxWidth: image.presentationWidth,
                margin: '0 auto',
              }}
            />
          </FlexContainer>
        </Section>
        <Section width="medium" noTopPadding className={styles.fullWidth}>
          <h3>{title}</h3>
          <p>{description}</p>
        </Section>
      </>
    );
  }

  if (leftImage) {
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
  } else {
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
