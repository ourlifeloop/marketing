import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import QuestionAndAnswer from './question-and-answer';
import { removeTrailingSlash } from '../utils/common';
import Testimonials from '../components/testimonials';
import LatestBlogSection from './latest-blog-section';
import FeatureHeader from './feature-header';
import NAVIGATION from '../utils/navigation';
import Button from '../primitives/button';
import SiteWrapper from './site-wrapper';
import DemoSection from './demo-section';
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
      {!!questions && (
        <TitleSection header="Want to know more? Read our FAQ's below.">
          <QuestionAndAnswer questions={questions} />
        </TitleSection>
      )}
      {!!testimonials && <Testimonials testimonials={testimonials} />}
      <LatestBlogSection />
      <DemoSection />
    </SiteWrapper>
  );
}

FeatureWrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
