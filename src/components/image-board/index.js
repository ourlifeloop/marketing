import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GatsbyImage } from 'gatsby-plugin-image';

import { image, imageTablet, imageMobile } from './image-board.module.scss';
import FlexContainer from '../../primitives/flex-container';
import { useDevice } from '../../utils/effects';

export default function ImageBoard({ title, images }) {
  const { isTablet, isMini } = useDevice();

  let imageBoard = images;
  if (isMini) {
    imageBoard = images.filter((_, i) => i < 4);
  }

  return (
    <FlexContainer wrap>
      {imageBoard.map((img, i) => (
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

ImageBoard.propTypes = {
  title: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
