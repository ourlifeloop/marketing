import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDevice, useDimensions } from '../utils/effects';
import RelativeContainer from './relative-container';
import FlexContainer from './flex-container';
import { clamp } from '../utils/lodash';
import Layout from './layout';

import styles from './hero-image.module.scss';

const OPACITY_CONSTANT = 1440;

export default function HeroImage({
  image,
  height,
  direction,
  title,
  description,
  children,
  className,
  ...rest
}) {
  const { width } = useDimensions();
  const { isMobile } = useDevice();

  const opacity = clamp(width / OPACITY_CONSTANT, 0, 1);

  return (
    <RelativeContainer>
      <Img style={{ height, opacity }} fluid={image} {...rest} />
      <Layout className={styles.layout}>
        <FlexContainer
          direction="column"
          justify="center"
          className={classNames(styles.heroContainer, className, {
            [styles.heroContainerRight]: direction === 'right',
            [styles.heroContainerFullWidth]: isMobile,
          })}
        >
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.titleDescription}>{description}</p>
          {children}
        </FlexContainer>
      </Layout>
    </RelativeContainer>
  );
}

HeroImage.propTypes = {
  image: PropTypes.shape().isRequired,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  direction: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

HeroImage.defaultProps = {
  direction: 'left',
  children: undefined,
  className: undefined,
};
