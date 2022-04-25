import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import LatestBlogSection from '../components/latest-blog-section';
import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import SiteWrapper from '../components/site-wrapper';
import DemoSection from '../components/demo-section';
import Button from '../primitives/button';

import { banner, list, listElement } from './in2l.module.scss';

export default function IN2L({ data }) {
  return (
    <SiteWrapper>
      <GatsbyImage
        className={banner}
        alt="LifeLoop Meeting"
        image={getImage(data.in2lPlusLifeLoop)}
        objectPosition="50% 68%"
      />
      <TitleSection header="Together, We Can Do More">
        <p>
          Have you heard the news? iN2L and LifeLoop have joined forces!
          Together, iN2L and LifeLoop offer your organization a comprehensive
          senior living technology platform developed to meaningfully impact
          staff effectiveness, workforce retention, staffing levels, AND
          resident engagement.
        </p>
      </TitleSection>
      <TitleSection header="What does this mean?" width="small">
        <p>
          Both iN2L and LifeLoop were founded on a shared mission to
          meaningfully advance the aging experience by engaging residents’
          interests to spark passion, joy, and delight; nurturing meaningful
          connections with loved ones, family, and new friends; and elevating
          the staff experience by generating efficiencies.
        </p>
        <p>
          Together, iN2L and LifeLoop will further our joint mission. For the
          first time, we will unite market-leading engagement technology with
          robust operational and administrative services in a singular platform
          that is uniquely positioned to address your organization's real-time
          needs, allowing you to:
        </p>
        <FlexContainer justify="center">
          <ul className={list}>
            <li className={listElement}>
              Support resident satisfaction and well-being
            </li>
            <li className={listElement}>
              Connect residents with family and loved ones outside of the
              community
            </li>
            <li className={listElement}>
              Drive operational efficiencies to lighten the burden of work on
              staff
            </li>
            <li className={listElement}>
              Help fill workflow gaps when staffing levels are low
            </li>
            <li className={listElement}>
              Derive clear value and return on investment (ROI) to better
              support your organization's strategic goals
            </li>
          </ul>
        </FlexContainer>
      </TitleSection>
      <ActionCallout
        title="See LifeLoop in action."
        body="The demo is customized around you. Get answers to your unique questions and find out why LifeLoop is the right choice for your community."
        button={
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        }
      />
      <LatestBlogSection />
      <DemoSection />
    </SiteWrapper>
  );
}

IN2L.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    in2lPlusLifeLoop: file(relativePath: { eq: "in2l-plus-lifeloop.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1440, quality: 100, layout: CONSTRAINED)
      }
    }
  }
`;
