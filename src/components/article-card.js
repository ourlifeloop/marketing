import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';

import styles from './article-card.module.scss';

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
          <Img
            className={classNames(styles.postImage, {
              [styles.postImageSmall]: small,
            })}
            fluid={photo}
          />
        )}
        <p className={styles.postTitle}>{title}</p>
        <p className={styles.postExcerpt}>{excerpt}</p>
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
