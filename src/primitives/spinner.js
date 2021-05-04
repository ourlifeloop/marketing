import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  spinner,
  light,
  child,
  circle2,
  circle3,
  circle4,
  circle5,
  circle6,
  circle7,
  circle8,
  circle9,
  circle10,
  circle11,
  circle12,
} from './spinner.module.scss';

export default function Spinner({ className, size, isLight }) {
  return (
    <div
      style={{ width: size, height: size }}
      className={classNames(spinner, className, {
        [light]: isLight,
      })}
    >
      <div className={child} />
      <div className={classNames(circle2, child)} />
      <div className={classNames(circle3, child)} />
      <div className={classNames(circle4, child)} />
      <div className={classNames(circle5, child)} />
      <div className={classNames(circle6, child)} />
      <div className={classNames(circle7, child)} />
      <div className={classNames(circle8, child)} />
      <div className={classNames(circle9, child)} />
      <div className={classNames(circle10, child)} />
      <div className={classNames(circle11, child)} />
      <div className={classNames(circle12, child)} />
    </div>
  );
}

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
  isLight: PropTypes.bool,
};

Spinner.defaultProps = {
  className: null,
  size: 30,
  isLight: false,
};
