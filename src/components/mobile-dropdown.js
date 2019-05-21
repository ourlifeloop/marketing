import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './mobile-dropdown.module.scss';

export default function MobileDropdown({ isOpen }) {
  return (
    <div
      className={classNames(styles.mobilePanel, {
        [styles.mobilePanelOpen]: isOpen,
      })}
    />
  );
}

MobileDropdown.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};
