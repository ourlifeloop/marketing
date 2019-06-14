import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ActionCallout from '../primitives/action-callout';
import FeatureHeader from './feature-header';
import Button from '../primitives/button';
import SiteWrapper from './site-wrapper';
import DemoSection from './demo-section';
import BlogSection from './blog-section';

export default function FeatureWrapper({ children, pathname }) {
  return (
    <SiteWrapper>
      <FeatureHeader pathname={pathname} />
      {children}
      <ActionCallout
        noTopPadding
        noBottomPadding
        title="Interested in learning more?"
        body="The demo is customized around you. Get answers to your unique questions and find out why LifeLoop is the right choice for your community."
        button={
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        }
      />
      <BlogSection />
      <DemoSection />
    </SiteWrapper>
  );
}

FeatureWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
