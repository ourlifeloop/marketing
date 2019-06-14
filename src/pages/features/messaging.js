import React from 'react';

import FeatureHeader from '../../components/feature-header';
import SiteWrapper from '../../components/site-wrapper';
import DemoSection from '../../components/demo-section';
import Layout from '../../primitives/layout';

export default () => (
  <SiteWrapper>
    <FeatureHeader />
    <Layout>
      <h1>Messaging Feature</h1>
    </Layout>
    <DemoSection />
  </SiteWrapper>
);
