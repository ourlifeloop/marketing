import React from 'react';
import PropTypes from 'prop-types';

import Section from '../primitives/section';

import { container, aspectRatio } from './embedded-display.module.scss';

export default function EmbeddedDisplay({ url }) {
  return (
    <Section noTopPadding>
      <div className={container}>
        <div className={aspectRatio}>
          <iframe
            title="Lifeloop Display"
            src={url}
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameborder="0"
            scrolling="no"
          />
        </div>
      </div>
    </Section>
  );
}

EmbeddedDisplay.propTypes = {
  url: PropTypes.string.isRequired,
};
