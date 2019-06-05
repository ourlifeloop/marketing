import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './input.module.scss';

export default function Input({ className, isError, ...rest }) {
  return (
    <input
      {...rest}
      className={classNames(styles.input, className, {
        [styles.inputError]: isError,
      })}
    />
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  isError: PropTypes.bool,
  className: PropTypes.string,
};

Input.defaultProps = {
  isError: false,
};
