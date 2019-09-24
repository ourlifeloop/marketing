import React from 'react';

import styles from './training-video.module.scss';
import PlayIcon from '../assets/icons/icon-play.svg';

export default function TrainingVideo({ cover, title, ...rest }) {
  return (
    <div className={styles.container} {...rest}>
      {cover}
      <PlayIcon className={styles.play} />
      <div className={styles.title}>{title}</div>
    </div>
  );
}
