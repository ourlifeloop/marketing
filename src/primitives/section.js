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
  noTopPadding,
  noBottomPadding,
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
        [styles.containerNoTopPadding]: noTopPadding,
        [styles.containerNoBottomPadding]: noBottomPadding,
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
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
};

Section.defaultProps = {
  centered: false,
  secondary: false,
  noTopPadding: false,
  noBottomPadding: false,
  width: undefined,
  className: undefined,
};
