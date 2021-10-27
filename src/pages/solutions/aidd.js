import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import RelativeContainer from '../../primitives/relative-container';
import ActionCallout from '../../primitives/action-callout';
import FlexContainer from '../../primitives/flex-container';
import TitleSection from '../../primitives/title.section';
import { removeTrailingSlash } from '../../utils/common';
import Testimonials from '../../components/testimonials';
import SiteWrapper from '../../components/site-wrapper';
import DemoSection from '../../components/demo-section';
import HeroImage from '../../primitives/hero-image';
import { useDevice } from '../../utils/effects';
import Section from '../../primitives/section';
import Button from '../../primitives/button';

import {
  emphasized,
  videoContainer,
  videoContainerVertical,
  videoImage,
  videoHeader,
  staffMinimized,
  staffBenefits,
  staffContainer,
  staffContent,
  communityFreeflow,
} from './solutions.module.scss';

const commuintyContent = (
  <>
    <h2>Communities</h2>
    <p>
      Utilizing the LifeLoop technology can assist staff with daily tasks and
      help you tell the story of each individual resident. By investing in
      LifeLoop, you can easily organize community operations and help staff save
      valuable time in their daily schedules. We are here to partner with your
      team to give them the services and support you need to properly serve your
      residents. Our Customer Support team will be there to provide training and
      guidance for an effective rollout process and will be available daily for
      ongoing support as needed.
    </p>
    <Link to="/features/activity-calendar">
      <Button>View LifeLoop's Features</Button>
    </Link>
  </>
);

export default function AIDD({ data, location }) {
  const { isMobile, isTablet } = useDevice();

  return (
    <SiteWrapper title="Keeping family, residents and staff connected and engaged | LifeLoop">
      <HeroImage
        direction="right"
        height={isMobile ? '400px' : '500px'}
        objectPosition="50% 40%"
        image={getImage(data.hero)}
        title="Create a Community of Opportunity"
        description="LifeLoop is proud to partner with communities that empower people with intellectual and developmental disabilities to thrive. Our product is proven to benefit and support all types of community life."
      />
      <TitleSection header="Supporting your Mission">
        <p>
          Many adults with intellectual and developmental disabilities and other
          neurodiversities face unique challenges in daily living. As your
          community works to create a supportive and caring environment where
          these individuals can thrive, we are proud to partner alongside your
          team as an extension of your mission and vision. The LifeLoop platform
          can provide tools to empower residents and support your staff as they
          work to create a culture of independence, inclusion, and
          connectedness.
        </p>
        <p className={emphasized}>
          Being “in the loop” means always having the latest information at your
          fingertips.
        </p>
      </TitleSection>
      <Section>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
          >
            <FlexContainer className={videoImage}>
              <GatsbyImage image={getImage(data.residents)} />
            </FlexContainer>
            <h2 className={videoHeader}>Residents</h2>
            <p>
              Community life that supports the ability to live, learn and thrive
              is an essential component to a successful resident experience.
              With LifeLoop, individuals can have a personal interest in their
              daily activities by signing up and registering for things like
              recreation, outings, classes and more. They can also connect with
              one another via our messaging features to promoted community
              connectedness.
            </p>
          </FlexContainer>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
          >
            <FlexContainer className={videoImage}>
              <GatsbyImage image={getImage(data.family)} />
            </FlexContainer>
            <h2 className={videoHeader}>Family</h2>
            <p>
              Partnering with communities to give families and guardians the
              transparency and access they want is central to our mission and
              vision. With LifeLoop, communities can capture and share insights
              with family members and provide detailed context on their loved
              one’s daily lives. For family members, LifeLoop provides one, easy
              place to go for communication allowing them to get in touch with
              their loved ones and community staff, view what activities their
              loved one attended, as well as see any accompanying photos that
              the community has shared.
            </p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <ActionCallout
        title="See LifeLoop in action."
        body="The demo is customized around you. Get answers to your unique questions and find out why LifeLoop is the right choice for your community."
        button={
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        }
      />
      <Section>
        <RelativeContainer
          className={classNames({ [staffMinimized]: isTablet })}
        >
          <FlexContainer className={staffBenefits}>
            <GatsbyImage image={getImage(data.communities)} />
          </FlexContainer>
          <FlexContainer justify="flexend" className={staffContainer}>
            <FlexContainer
              direction="column"
              justify="center"
              className={staffContent}
            >
              {commuintyContent}
            </FlexContainer>
          </FlexContainer>
        </RelativeContainer>
        {isTablet && (
          <FlexContainer direction="column" className={communityFreeflow}>
            {commuintyContent}
          </FlexContainer>
        )}
      </Section>
      <Testimonials pathname={removeTrailingSlash(location.pathname)} />
      <DemoSection />
    </SiteWrapper>
  );
}

AIDD.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "aidd-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 80)
      }
    }
    communities: file(relativePath: { eq: "aidd-communities.png" }) {
      childImageSharp {
        gatsbyImageData(width: 1356, layout: CONSTRAINED, quality: 80)
      }
    }
    family: file(relativePath: { eq: "aidd-families.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 623
          height: 400
          layout: CONSTRAINED
          quality: 80
        )
      }
    }
    residents: file(relativePath: { eq: "aidd-residents.jpg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 623
          height: 400
          layout: CONSTRAINED
          quality: 80
        )
      }
    }
  }
`;
