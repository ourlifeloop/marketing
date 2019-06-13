import React from 'react';

import FeatureHeader from '../../components/feature-header';
import SiteWrapper from '../../components/site-wrapper';
import Layout from '../../primitives/layout';

export default () => (
  <SiteWrapper>
    <FeatureHeader />
    <Layout>
      <h1>Resident Management Feature</h1>
    </Layout>
  </SiteWrapper>
);
