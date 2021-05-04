import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';
import Layout from './layout';

import {
  container,
  containerSecondary,
  containerCentered,
  containerNoTopPadding,
  containerNoBottomPadding,
  containerFullHeight,
  containerFullHeightMobile,
  innerContainer,
  innerContainerMedium,
  innerContainerSmall,
} from './section.module.scss';
import { useDevice } from '../utils/effects';

export default function Section({
  children,
  centered,
  secondary,
  noTopPadding,
  noBottomPadding,
  fullHeight,
  width,
  className,
}) {
  const { isMobile } = useDevice();
  return (
    <FlexContainer
      direction="column"
      justify={centered ? 'center' : 'flexstart'}
      className={classNames(container, className, {
        [containerSecondary]: secondary,
        [containerCentered]: centered,
        [containerNoTopPadding]: noTopPadding,
        [containerNoBottomPadding]: noBottomPadding,
        [containerFullHeight]: fullHeight,
        [containerFullHeightMobile]: fullHeight && isMobile,
      })}
    >
      <Layout>
        <div
          className={classNames(innerContainer, {
            [innerContainerMedium]: width === 'medium',
            [innerContainerSmall]: width === 'small',
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
  fullHeight: PropTypes.bool,
  width: PropTypes.string,
  className: PropTypes.string,
};

Section.defaultProps = {
  centered: false,
  secondary: false,
  noTopPadding: false,
  noBottomPadding: false,
  fullHeight: false,
  width: undefined,
  className: undefined,
};
