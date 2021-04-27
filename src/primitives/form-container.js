import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from './flex-container';

import { formContainer } from './form-container.module.scss';

export default function FormContainer({ children }) {
  return (
    <FlexContainer direction="column" className={formContainer}>
      {children}
    </FlexContainer>
  );
}

FormContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
