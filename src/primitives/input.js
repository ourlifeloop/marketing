import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

import { input, inputError, textarea } from './input.module.scss';

export default function Input({ className, isError, type, ...rest }) {
  if (type === 'select') {
    return <Select className={className} {...rest} />;
  }
  if (type === 'textarea') {
    return (
      <textarea
        {...rest}
        className={classNames(input, textarea, className, {
          [inputError]: isError,
        })}
      />
    );
  }
  return (
    <input
      {...rest}
      type={type}
      className={classNames(input, className, {
        [inputError]: isError,
      })}
    />
  );
}

Input.propTypes = {
  isError: PropTypes.bool,
  className: PropTypes.string,
  type: PropTypes.string,
};

Input.defaultProps = {
  isError: false,
  type: 'string',
};
