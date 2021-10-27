/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

import React, { useState } from 'react';
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
import PlayIcon from '../../assets/icons/icon-play.svg';
import VideoButton from '../../primitives/video-button';
import VideoModal from '../../primitives/video-modal';
import HeroImage from '../../primitives/hero-image';
import { useDevice } from '../../utils/effects';
import Section from '../../primitives/section';
import Button from '../../primitives/button';

import {
  emphasized,
  videoContainer,
  videoContainerVertical,
  videoImageHoverable,
  videoHeader,
  staffMinimized,
  staffBenefitsHoverable,
  staffContainer,
  staffPlayIcon,
  staffContent,
  communityFreeflow,
} from './solutions.module.scss';

const commuintyContent = (
  <>
    <h2>Communities</h2>
    <p>
      Provide your staff the tools they need to have purpose and success in
      their careers. Utilizing the LifeLoop technology can assist with staff
      retention and help you tell the story of each individual resident. By
      investing in LifeLoop, you are ensuring that you can spend more one-on-one
      time with your residents.
    </p>
    <p>
      Additionally, community outreach and marketing initiatives can benefit
      from LifeLoop by differentiating your community from the rest and
      demonstrating your commitment to transparency and family communication.
      The better you are at communicating with family members, the more willing
      they are to recommend your community to family and friends.
    </p>
    <Link to="/features/activity-calendar">
      <Button>View LifeLoop's Features</Button>
    </Link>
  </>
);

export default function SeniorLivingSolution({ data, location }) {
  const [video, setVideo] = useState();
  const { isMobile, isTablet } = useDevice();

  return (
    <SiteWrapper title="Keeping family, residents and staff connected and engaged | LifeLoop">
      <HeroImage
        direction="right"
        height={isMobile ? '400px' : '500px'}
        objectPosition="30% 30%"
        image={getImage(data.hero)}
        title="Create a Community of Opportunity"
        description="LifeLoop is proud to partner with communities that empower people with intellectual and developmental disabilities to thrive. Our product is proven to benefit and support all types of community life."
      >
        <VideoButton
          text="LifeLoop: A proven marketing solution"
          image={getImage(data.staffBenefits)}
          onClick={() =>
            setVideo({
              link: 'https://www.youtube-nocookie.com/embed/bZcShIjmwAc',
              title: 'LifeLoop: Set Your Community Appart',
            })
          }
        />
      </HeroImage>
      <TitleSection header="A solution for every department.">
        <p>
          LifeLoop is a full-service solution which allows your community to
          consolidate all of your operational platforms into one, easy-to-use
          system. Our product is proven to provide results that can benefit
          clients both large and small. With LifeLoop, you will gain an
          experienced partner who can help you achieve your desired outcomes,
          create efficiencies and set your community apart.
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
            <FlexContainer
              className={videoImageHoverable}
              onClick={() =>
                setVideo({
                  link: 'https://www.youtube-nocookie.com/embed/XQDtfhPTgNo',
                  title: 'Life Enrichment Directors & Residents',
                })
              }
            >
              <GatsbyImage
                image={getImage(data.connectResidents)}
                alt="Resident Benefits"
              />
            </FlexContainer>
            <h2 className={videoHeader}>Residents</h2>
            <p>
              With LifeLoop, you can transform the caregiving experience.
              Residents are connected with family, friends and community staff
              which provides a sense of feeling at home. This allows them to
              retain independence, while never feeling out of touch.
            </p>
            <p>
              One of our passions at LifeLoop is relieving social isolation for
              older adults. By fostering a sense of community and connecting
              residents with one another, LifeLoop will have a positive impact
              on your community and provide a competitive advantage.
            </p>
          </FlexContainer>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
          >
            <FlexContainer
              className={videoImageHoverable}
              onClick={() =>
                setVideo({
                  link: 'https://www.youtube-nocookie.com/embed/DucvjjOT0bs',
                  title: 'Connecting Residents & Family',
                })
              }
            >
              <GatsbyImage
                image={getImage(data.connectFamily)}
                alt="Family Benefits"
              />
            </FlexContainer>
            <h2 className={videoHeader}>Family</h2>
            <p>
              Allowing families the transparency they want and the access they
              deserve is central to our mission and vision. With LifeLoop, you
              can capture and share insights with family members and provide
              detailed context on their loved one’s daily lives. For family
              members, LifeLoop provides one, easy place to go for communication
              allowing you to get in touch with your loved ones caregivers
              across all levels.
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
          <FlexContainer
            className={staffBenefitsHoverable}
            onClick={() =>
              setVideo({
                link: 'https://www.youtube-nocookie.com/embed/JW5KkDSdt8w',
                title: 'Connecting Management & Staff',
              })
            }
          >
            <GatsbyImage
              image={getImage(data.staffBenefits)}
              alt="Staff Benefits"
            />
          </FlexContainer>
          <FlexContainer className={staffContainer}>
            <FlexContainer flex="1" align="center" justify="center">
              <PlayIcon width={120} className={staffPlayIcon} />
            </FlexContainer>
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
      <VideoModal
        isOpen={!!video}
        onClose={() => setVideo()}
        {...(video || {})}
      />
    </SiteWrapper>
  );
}

SeniorLivingSolution.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "senior-living-solution-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 80)
      }
    }
    staffBenefits: file(relativePath: { eq: "staff-benefits-callout.jpg" }) {
      childImageSharp {
        gatsbyImageData(height: 596, layout: CONSTRAINED, quality: 80)
      }
    }
    connectFamily: file(
      relativePath: { eq: "video-callout-connect-family.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(
          width: 623
          height: 400
          layout: CONSTRAINED
          quality: 80
        )
      }
    }
    connectResidents: file(
      relativePath: { eq: "video-callout-connect-residents.jpg" }
    ) {
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
