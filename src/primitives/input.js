import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from 'react-select';

import styles from './input.module.scss';

export default function Input({ className, isError, type, ...rest }) {
  if (type === 'select') {
    return <Select className={className} {...rest} />;
  }
  if (type === 'textarea') {
    return (
      <textarea
        {...rest}
        className={classNames(styles.input, styles.textarea, className, {
          [styles.inputError]: isError,
        })}
      />
    );
  }
  return (
    <input
      {...rest}
      type={type}
      className={classNames(styles.input, className, {
        [styles.inputError]: isError,
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
