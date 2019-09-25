import React from 'react';

import FlexContainer from '../primitives/flex-container';
import { createDownload } from '../utils/common';
import { Download } from '../utils/icons';

import styles from './training-document.module.scss';

export default function TrainingDocument({ title, document }) {
  const { publicURL, prettySize, extension, changeTime } = document;
  return (
    <FlexContainer
      align="center"
      justify="spacebetween"
      className={styles.row}
      onClick={() =>
        createDownload({
          url: publicURL,
          fileName: `${title.trim()}.${extension}`,
        })
      }
    >
      <FlexContainer direction="column" className={styles.textContainer}>
        <div className={styles.title}>
          {title} ({prettySize})
        </div>
        <div className={styles.subText}>Last Updated {changeTime}</div>
      </FlexContainer>
      <Download size={30} className={styles.icon} />
    </FlexContainer>
  );
}
