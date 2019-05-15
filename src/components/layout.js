import React from 'react';

import styles from './layout.module.scss';

export default ({ children }) => (
  <div className={styles.layout}>{children}</div>
);
