import React from 'react';
import PropTypes from 'prop-types';

import FeatureHeader from './feature-header';
import SiteWrapper from './site-wrapper';
import DemoSection from './demo-section';
import BlogSection from './blog-section';

export default function FeatureWrapper({ children }) {
  return (
    <SiteWrapper>
      <FeatureHeader />
      {children}
      <BlogSection />
      <DemoSection />
    </SiteWrapper>
  );
}

FeatureWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
