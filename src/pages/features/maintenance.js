import React from 'react';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';

export default ({ data, location }) => (
  <FeatureWrapper pathname={location.pathname}>
    <TitleSection header="Maintenance">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus
        vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar
        finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi
        id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor
        vel, pulvinar condimentum tellus.
      </p>
    </TitleSection>
  </FeatureWrapper>
);
