import React from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import RelativeContainer from './relative-container';
import FlexContainer from './flex-container';
import Layout from './layout';

import styles from './hero-image.module.scss';

export default function HeroImage({
  image,
  height,
  direction,
  title,
  description,
  children,
  ...rest
}) {
  return (
    <RelativeContainer>
      <Img style={{ height }} fluid={image} {...rest} />
      <Layout className={styles.layout}>
        <FlexContainer
          direction="column"
          justify="center"
          className={classNames(styles.heroContainer, {
            [styles.heroContainerRight]: direction === 'right',
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
};

HeroImage.defaultProps = {
  direction: 'left',
  children: undefined,
};
