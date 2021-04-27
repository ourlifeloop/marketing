import React from 'react';
import Select from 'react-select';

import FlexContainer from '../primitives/flex-container';
import { find, startsWith } from '../utils/lodash';

import { option, optionIcon, select } from './feature-dropdown.module.scss';

const FeatureOption = ({ innerProps, children, data, ...rest }) => {
  const { Icon } = data;
  return (
    <FlexContainer {...innerProps} align="center" className={option}>
      <Icon className={optionIcon} />
      <b>{children}</b>
    </FlexContainer>
  );
};

export default function FeatureDropdown({ options, value, onChange }) {
  return (
    <Select
      isSearchable={false}
      className={select}
      options={options}
      value={find(options, option => startsWith(option.value, value))}
      onChange={onChange}
      components={{ Option: FeatureOption, SingleValue: FeatureOption }}
    />
  );
}
