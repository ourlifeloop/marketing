import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { useDevice } from '../utils/effects';

import styles from './layout.module.scss';

export default function Layout({ children, className }) {
  const { isMobile } = useDevice();
  return (
    <div
      className={classNames(className, styles.layout, {
        [styles.layoutMobile]: isMobile,
      })}
    >
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Layout.defaultProps = {
  className: undefined,
};
