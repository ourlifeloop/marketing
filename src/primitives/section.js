import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';
import Layout from './layout';

import styles from './section.module.scss';

export default function Section({
  children,
  centered,
  secondary,
  width,
  className,
}) {
  return (
    <FlexContainer
      direction="column"
      justify={centered ? 'center' : 'flexstart'}
      className={classNames(styles.container, className, {
        [styles.containerSecondary]: secondary,
        [styles.containerCentered]: centered,
      })}
    >
      <Layout>
        <div
          className={classNames(styles.innerContainer, {
            [styles.innerContainerMedium]: width === 'medium',
            [styles.innerContainerSmall]: width === 'small',
          })}
        >
          {children}
        </div>
      </Layout>
    </FlexContainer>
  );
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
  centered: PropTypes.bool,
  secondary: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
};

Section.defaultProps = {
  centered: false,
  secondary: false,
  width: undefined,
  className: undefined,
};
