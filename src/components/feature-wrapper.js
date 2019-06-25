import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ActionCallout from '../primitives/action-callout';
import QuestionAndAnswer from './question-and-answer';
import { removeTrailingSlash } from '../utils/common';
import Testimonials from '../components/testimonials';
import FeatureHeader from './feature-header';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import SiteWrapper from './site-wrapper';
import DemoSection from './demo-section';
import BlogSection from './blog-section';
import { find } from '../utils/lodash';

export default function FeatureWrapper({ children, pathname, ...rest }) {
  const { testimonials, questions } = find(NAVIGATION.features.subNav, {
    link: removeTrailingSlash(pathname),
  });

  return (
    <SiteWrapper {...rest}>
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
      <QuestionAndAnswer questions={questions} />
      {!!testimonials && <Testimonials testimonials={testimonials} />}
      <BlogSection />
      <DemoSection />
    </SiteWrapper>
  );
}

FeatureWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
