import React from 'react';

import styles from './relative-container.module.scss';

export default ({ children }) => (
  <div className={styles.container}>{children}</div>
);
