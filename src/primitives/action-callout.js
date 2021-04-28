import React from 'react';
import PropTypes from 'prop-types';

import FlexContainer from './flex-container';
import { useDevice } from '../utils/effects';
import Section from './section';

import { callout, calloutText } from './action-callout.module.scss';

export default function ActionCallout({ title, body, button, ...rest }) {
  const { isMini } = useDevice();
  return (
    <Section width="medium" {...rest}>
      <FlexContainer
        direction={isMini ? 'column' : 'row'}
        className={callout}
        align="center"
      >
        <FlexContainer className={calloutText} direction="column">
          <h3>{title}</h3>
          <p>{body}</p>
        </FlexContainer>
        {button}
      </FlexContainer>
    </Section>
  );
}

ActionCallout.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  button: PropTypes.node,
};

ActionCallout.defaultProps = {
  button: undefined,
};
