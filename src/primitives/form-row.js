import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';

import styles from './form-row.module.scss';

export default function FormRow({ children }) {
  return (
    <FlexContainer>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: classNames(child.className, styles.child),
        }),
      )}
    </FlexContainer>
  );
}

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
};
