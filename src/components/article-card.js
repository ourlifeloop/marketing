import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';

import {
  postImage,
  postImageSmall,
  postTitle,
  postExcerpt,
} from './article-card.module.scss';

export default function ArticleCard({
  className,
  link,
  photo,
  title,
  excerpt,
  small,
}) {
  return (
    <Link to={link} className={className}>
      <FlexContainer direction="column">
        {!!photo && (
          <GatsbyImage
            alt={title}
            image={photo}
            className={classNames(postImage, {
              [postImageSmall]: small,
            })}
          />
        )}
        <p className={postTitle}>{title}</p>
        <p className={postExcerpt}>{excerpt}</p>
      </FlexContainer>
    </Link>
  );
}

ArticleCard.propTypes = {
  className: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  photo: PropTypes.shape().isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  small: PropTypes.bool,
};

ArticleCard.defaultProps = {
  small: false,
};
