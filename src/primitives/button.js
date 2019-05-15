import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.module.scss';

export default function Button({ children, className }) {
  return (
    <button className={classNames(styles.button, className)}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
