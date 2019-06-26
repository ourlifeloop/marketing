import React from 'react';
import classNames from 'classnames';

import styles from './relative-container.module.scss';

export default ({ children, className, ...rest }) => (
  <div {...rest} className={classNames(styles.container, className)}>
    {children}
  </div>
);
