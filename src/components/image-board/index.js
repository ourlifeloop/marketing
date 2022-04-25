import React from 'react';
import classNames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';

import { image, imageTablet, imageMobile } from './image-board.module.scss';
import FlexContainer from '../../primitives/flex-container';
import { useDevice } from '../../utils/effects';

export default function ImageBoard({ title, images }) {
  const { isTablet, isMini } = useDevice();

  return (
    <FlexContainer wrap>
      {images.map((img, i) => (
        <GatsbyImage
          key={i}
          className={classNames(image, {
            [imageTablet]: isTablet,
            [imageMobile]: isMini,
          })}
          alt={`${title} - ${i + 1}`}
          image={img}
        />
      ))}
    </FlexContainer>
  );
}
