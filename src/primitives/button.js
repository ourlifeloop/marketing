import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Spinner from './spinner';

import { spinner, button, inner, loading } from './button.module.scss';

export default function Button({ children, className, isLoading, ...rest }) {
  let loadingSpinner = null;
  if (isLoading) {
    loadingSpinner = <Spinner isLight size={20} className={spinner} />;
  }
  return (
    <button {...rest} className={classNames(button, className)}>
      {loadingSpinner}
      <span className={classNames(inner, { [loading]: isLoading })}>
        {children}
      </span>
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
};

Button.defaultProps = {
  className: undefined,
  isLoading: false,
};
