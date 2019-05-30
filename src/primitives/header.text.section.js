import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Section from './section';

import styles from './header.text.section.module.scss';

export default function HeaderTextSection({ header, text, children, ...rest }) {
  return (
    <Section centered width="medium" {...rest}>
      <h2 className={styles.header}>{header}</h2>
      <p className={classNames({ [styles.textPadding]: !!children })}>{text}</p>
      {children}
    </Section>
  );
}

HeaderTextSection.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

HeaderTextSection.defaultProps = {
  children: undefined,
};
