import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from './flex-container';
import { useDevice } from '../utils/effects';

import { childItem, childItemCollapsed } from './form-row.module.scss';

export default function FormRow({ children }) {
  const { isMini } = useDevice();
  return (
    <FlexContainer direction={isMini ? 'column' : 'row'}>
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          className: classNames(child.className, childItem, {
            [childItemCollapsed]: isMini,
          }),
        }),
      )}
    </FlexContainer>
  );
}

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
};
