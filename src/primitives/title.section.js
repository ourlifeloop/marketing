import React from 'react';
import PropTypes from 'prop-types';

import Section from './section';

import styles from './title.section.module.scss';

export default function TitleSection({ header, children, ...rest }) {
  return (
    <Section centered width="medium" {...rest}>
      <h2 className={styles.header}>{header}</h2>
      {children}
    </Section>
  );
}

TitleSection.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.node,
};

TitleSection.defaultProps = {
  children: undefined,
};
