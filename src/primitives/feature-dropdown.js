import React from 'react';
import Select from 'react-select';

import FlexContainer from '../primitives/flex-container';
import { find, startsWith } from '../utils/lodash';

import styles from './feature-dropdown.module.scss';

const FeatureOption = ({ innerProps, children, data, ...rest }) => {
  const { Icon } = data;
  return (
    <FlexContainer {...innerProps} align="center" className={styles.option}>
      <Icon className={styles.optionIcon} />
      <b>{children}</b>
    </FlexContainer>
  );
};

export default ({ options, value, onChange }) => (
  <Select
    isSearchable={false}
    className={styles.select}
    options={options}
    value={find(options, option => startsWith(option.value, value))}
    onChange={onChange}
    components={{ Option: FeatureOption, SingleValue: FeatureOption }}
  />
);
