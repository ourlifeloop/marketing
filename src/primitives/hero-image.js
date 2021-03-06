import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDevice, useDimensions } from '../utils/effects';
import RelativeContainer from './relative-container';
import FlexContainer from './flex-container';
import { clamp } from '../utils/lodash';
import Layout from './layout';

import {
  layout,
  heroContainer,
  heroContainerRight,
  heroContainerFullWidth,
  titleText,
  titleDescription,
} from './hero-image.module.scss';

const OPACITY_CONSTANT = 1440;

export default function HeroImage({
  image,
  height,
  direction,
  title,
  description,
  children,
  className,
  imgClassName,
  ...rest
}) {
  const { width } = useDimensions();
  const { isMobile } = useDevice();

  const opacity = clamp(width / OPACITY_CONSTANT, 0, 1);

  return (
    <RelativeContainer>
      <FlexContainer style={{ opacity, height }}>
        <GatsbyImage
          alt={title}
          image={image}
          className={imgClassName}
          {...rest}
        />
      </FlexContainer>
      <Layout className={layout}>
        <FlexContainer
          direction="column"
          justify="center"
          className={classNames(heroContainer, className, {
            [heroContainerRight]: direction === 'right',
            [heroContainerFullWidth]: isMobile,
          })}
        >
          <h1 className={titleText}>{title}</h1>
          <p className={titleDescription}>{description}</p>
          {children}
        </FlexContainer>
      </Layout>
    </RelativeContainer>
  );
}

HeroImage.propTypes = {
  image: PropTypes.shape().isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  direction: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  imgClassName: PropTypes.string,
};

HeroImage.defaultProps = {
  height: undefined,
  direction: 'left',
  children: undefined,
  className: undefined,
  imgClassName: undefined,
};
