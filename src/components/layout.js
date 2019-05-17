import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './layout.module.scss';

export default function Layout({ children, className }) {
  return <div className={classNames(className, styles.layout)}>{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: undefined,
};
