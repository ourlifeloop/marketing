import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import * as styles from './flex-container.module.scss';
import { capitalize } from '../utils/lodash';

export default function FlexContainer({
  align,
  className,
  justify,
  direction,
  children,
  wrap,
  scroll,
  flex,
  shrink,
  style,
  ...rest
}) {
  const containerStyle = flex !== null ? { ...style, flex } : style;
  return (
    <div
      {...rest}
      style={containerStyle}
      className={classNames(styles.container, className, {
        [styles[`align${capitalize(align)}`]]: align,
        [styles[`justify${capitalize(justify)}`]]: justify,
        [styles[`direction${capitalize(direction)}`]]: direction,
        [styles[`shrink${capitalize(shrink)}`]]: shrink,
        [styles.wrap]: wrap,
        [styles.scroll]: scroll,
      })}
    >
      {children}
    </div>
  );
}

FlexContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf([
    'stretch',
    'center',
    'flexstart',
    'flexend',
    'baseline',
    'initial',
    'inherit',
  ]),
  justify: PropTypes.oneOf([
    'flexstart',
    'flexend',
    'center',
    'spacebetween',
    'spacearound',
    'spaceevenly',
    'initial',
    'inherit',
  ]),
  direction: PropTypes.oneOf(['row', 'column', 'columnreverse']),
  wrap: PropTypes.bool,
  scroll: PropTypes.bool,
  flex: PropTypes.string,
  shrink: PropTypes.oneOf(['0', '1']),
  style: PropTypes.shape(),
};

FlexContainer.defaultProps = {
  className: null,
  align: null,
  justify: null,
  direction: null,
  wrap: false,
  scroll: false,
  flex: null,
  shrink: null,
  style: {},
  children: null,
};
