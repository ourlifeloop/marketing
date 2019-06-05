import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './label.module.scss';

export default function Label({ children, title, htmlFor, ...rest }) {
  return (
    <label className={styles.label} htmlFor={htmlFor} {...rest}>
      {title}
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: classNames(child.className, styles.input),
          id: htmlFor,
        }),
      )}
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};
