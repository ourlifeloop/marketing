import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import { removeTrailingSlash } from '../utils/common';
import SiteWrapper from '../components/site-wrapper';
import DemoSection from '../components/demo-section';
import BlogSection from '../components/blog-section';
import ImageBoard from '../components/image-board';
import Button from '../primitives/button';

import { banner, list, listElement } from './in2l.module.scss';

export default function IN2L({ data, location }) {
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
      <ImageBoard
        title="iN2L + LifeLoop"
        images={[
          data.express,
          data.blackjack,
          data.staffBenefits,
          data.slideshow,
          data.dashboard,
          data.residentTablets,
        ].map(getImage)}
      />
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
      <Testimonials pathname={removeTrailingSlash(location.pathname)} />
      <BlogSection posts={data.blogs} />
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
  fragment actionImage on File {
    childImageSharp {
      gatsbyImageData(height: 300, quality: 80, layout: CONSTRAINED)
    }
  }

  query {
    in2lPlusLifeLoop: file(relativePath: { eq: "in2l-plus-lifeloop.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1440, quality: 100, layout: CONSTRAINED)
      }
    }
    blackjack: file(relativePath: { eq: "in2l-blackjack.webp" }) {
      ...actionImage
    }
    express: file(relativePath: { eq: "lifeloop-express-cell.png" }) {
      ...actionImage
    }
    staffBenefits: file(relativePath: { eq: "staff-benefits-callout.jpg" }) {
      ...actionImage
    }
    slideshow: file(relativePath: { eq: "in2l-slideshow.jpeg" }) {
      ...actionImage
    }
    dashboard: file(relativePath: { eq: "aidd-communities.png" }) {
      ...actionImage
    }
    residentTablets: file(relativePath: { eq: "in2l-resident-tablets.png" }) {
      ...actionImage
    }
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          title: {
            in: [
              "Get to Know Our CEO, Navin Gupta"
              "iN2L + LifeLoop | Together, we can do more."
            ]
          }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            photo {
              childImageSharp {
                gatsbyImageData(width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
