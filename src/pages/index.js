import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import classNames from 'classnames';

import FeatureCardSwitcher from '../components/feature-card-switcher';
import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import DemoSection from '../components/demo-section';
import SiteWrapper from '../components/site-wrapper';
import VideoButton from '../primitives/video-button';
import VideoModal from '../primitives/video-modal';
import HeroImage from '../primitives/hero-image';
import Section from '../primitives/section';
import Button from '../primitives/button';

import { useDevice } from '../utils/effects';

import {
  hero,
  heroImg,
  heroImgMobile,
  videoContainer,
  videoContainerVertical,
} from './index.module.scss';

export default function Home({ data, location }) {
  const [video, setVideo] = useState();
  const { isMobile } = useDevice();

  return (
    <SiteWrapper transparent>
      <HeroImage
        className={hero}
        imgClassName={classNames(heroImg, { [heroImgMobile]: isMobile })}
        objectPosition="30% 0%"
        image={getImage(data.hero)}
        title="Enhancing Resident & Family Engagement Through Technology"
        description="Creating technology solutions to enhance the lives of residents, family members and the staff who care for them. LifeLoop is your innovative senior living solution."
      >
        <VideoButton
          text="Enhancing the lives of older adults"
          image={getImage(data.benefitsCallout)}
          onClick={() =>
            setVideo({
              link: 'https://www.youtube-nocookie.com/embed/zOjOiZbJybM',
              title: 'Enhancing the lives of older adults',
            })
          }
        />
      </HeroImage>
      <TitleSection header="A higher level of connection.">
        <p>
          At LifeLoop, we believe that quality community life extends far beyond
          the physical walls of your facility. With the use of technology, we
          have created a platform that can enhance the lives of your residents,
          their families and the staff who care for them. Helping you tell the
          story of your community with our custom-made senior living solutions
          is truly our passion.
        </p>
        <p>
          LifeLoop was founded based on the need to better communicate and
          engage family members of senior living communities. Today, we are a
          multi-faceted platform designed to streamline operations, work flow,
          and communication with your internal and external stakeholders.
        </p>
      </TitleSection>
      <FeatureCardSwitcher />
      <Testimonials pathname={location.pathname} />
      <ActionCallout
        noTopPadding
        title="Innovative solutions for your senior living community."
        body="The demo is customized around you. Get answers to your unique questions and find out why LifeLoop is the right choice for your community."
        button={
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        }
      />
      <TitleSection header="Solutions custom-made for your senior living community.">
        <p>
          LifeLoop has tools for today's communities. LifeLoop can help
          residents thrive with tools for management, scheduling, data tracking
          and more!
        </p>
      </TitleSection>
      <Section centered noTopPadding>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            align="center"
            onClick={() =>
              setVideo({
                link: 'https://www.youtube-nocookie.com/embed/JW5KkDSdt8w',
                title: 'Connecting Management & Staff',
              })
            }
          >
            <GatsbyImage
              alt="Connecting Management & Staff"
              image={getImage(data.connectStaff)}
            />
            <p>Connecting Management & Staff</p>
          </FlexContainer>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            align="center"
            onClick={() =>
              setVideo({
                link: 'https://www.youtube-nocookie.com/embed/DucvjjOT0bs',
                title: 'Connecting Residents & Family',
              })
            }
          >
            <GatsbyImage
              alt="Connecting Residents & Family"
              image={getImage(data.connectFamily)}
            />
            <p>Connecting Residents & Family</p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <DemoSection />
      <VideoModal
        isOpen={!!video}
        onClose={() => setVideo()}
        {...(video || {})}
      />
    </SiteWrapper>
  );
}

Home.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(quality: 80, layout: CONSTRAINED)
      }
    }
    connectFamily: file(
      relativePath: { eq: "video-callout-connect-family.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 623, layout: CONSTRAINED)
      }
    }
    connectStaff: file(
      relativePath: { eq: "video-callout-connect-staff.jpg" }
    ) {
      childImageSharp {
        gatsbyImageData(width: 623, layout: CONSTRAINED)
      }
    }
    benefitsCallout: file(relativePath: { eq: "staff-benefits-callout.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 250, layout: CONSTRAINED)
      }
    }
  }
`;
