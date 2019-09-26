import React from 'react';

import { createDownload, iconForExtension } from '../utils/common';
import FlexContainer from '../primitives/flex-container';
import { Download } from '../utils/icons';

import styles from './training-document.module.scss';

export default function TrainingDocument({ title, document }) {
  const { publicURL, prettySize, extension, changeTime } = document;
  const Icon = iconForExtension(extension);
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
      <FlexContainer align="center">
        <Icon className={styles.docType} />
        <FlexContainer direction="column" className={styles.textContainer}>
          <div className={styles.title}>
            {title} ({prettySize})
          </div>
          <div className={styles.subText}>Last Updated {changeTime}</div>
        </FlexContainer>
      </FlexContainer>
      <Download size={30} className={styles.icon} />
    </FlexContainer>
  );
}
