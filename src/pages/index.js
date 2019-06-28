import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import ResponsiveEmbed from 'react-responsive-embed';

import FeatureCardSwitcher from '../components/feature-card-switcher';
import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import DemoSection from '../components/demo-section';
import SiteWrapper from '../components/site-wrapper';
import VideoModal from '../primitives/video-modal';
import HeroImage from '../primitives/hero-image';
import Section from '../primitives/section';
import Button from '../primitives/button';

import { useDevice } from '../utils/effects';

import styles from './index.module.scss';

export default ({ data }) => {
  const [video, setVideo] = useState();
  const { isMobile } = useDevice();

  return (
    <SiteWrapper transparent>
      <HeroImage
        height={isMobile ? '500px' : '600px'}
        className={styles.hero}
        objectPosition="30% 0%"
        image={data.hero.childImageSharp.fluid}
        title="Enhancing Resident & Family Engagement Through Technology"
        description="Creating technology solutions to enhance the lives of residents, family members and the staff who care for them. LifeLoop is your innovative senior living solution."
      >
        <FlexContainer
          className={styles.videoBtn}
          onClick={() =>
            setVideo({
              link: 'https://www.youtube-nocookie.com/embed/zOjOiZbJybM',
              title: 'Enhancing the lives of older adults',
            })
          }
        >
          <div className={styles.videoBtnEmbed}>
            <ResponsiveEmbed
              src="https://www.youtube-nocookie.com/embed/zOjOiZbJybM"
              title="Enhancing the lives of older adults"
            />
          </div>
          <FlexContainer
            direction="column"
            justify="center"
            className={styles.videoBtnText}
          >
            <b>Enhancing the lives of older adults</b>
            <p>Watch the Video</p>
          </FlexContainer>
        </FlexContainer>
      </HeroImage>
      <TitleSection header="A higher level of connection.">
        <p>
          We believe that quality community life extends far beyond the physical
          walls of your facility. We believe that adapting technology solutions
          can enhance the lives of your residents, their families and the staff
          who care for them. We believe that we can help you tell the story of
          your community with our custom-made senior living solutions.
        </p>
        <p>
          LifeLoop was founded based on the need to better communicate and
          engage family members of senior living communities. Today, we are a
          multi-faceted platform designed to streamline operations, work flow,
          and communication with your internal and external stakeholders.
        </p>
      </TitleSection>
      <FeatureCardSwitcher />
      <Testimonials
        testimonials={[
          {
            logo: 'cascadia',
            quote:
              "LifeLoop's valuable to us because the present and the future of our industry is to keep family members more and more involved in our residents' lives. Family members are naturally curious about what's going on with their loved ones, and LifeLoop is both a proactive and reactive way of helping with that.",
            author: 'Thomas Cloutier',
            position: 'Vice President of Operations',
          },
          {
            logo: 'fieldstone',
            quote:
              "I have worked with Life Loop since its beginnings and I continue to be impressed with the continued growth and improvement of the product. Our families enjoy the information and photos they get daily, a kind of a window into their loved one's day, and our staff relies on the communication and attendance tracking.",
            author: 'Lucie Flood',
            position: 'Life Enrichment Director',
          },
          {
            logo: 'dial',
            quote:
              'In this industry, employee turnover is common, unfortunately, and it can be very difficult to bring new staff up to speed. An easy system like this really helps. And it can even help build a consistent company culture, even as staff rotates.',
            author: 'Lisa Moes',
            position: 'Dial Retirement Communities',
          },
        ]}
      />
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
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
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
            <Img fluid={data.connectStaff.childImageSharp.fluid} />
            <p>Connecting Management & Staff</p>
          </FlexContainer>
          <FlexContainer
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
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
            <Img fluid={data.connectFamily.childImageSharp.fluid} />
            <p>Connecting Residents & Family</p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <DemoSection />
      <VideoModal
        isOpen={!!video}
        onClose={() => setVideo()}
        {...video || {}}
      />
    </SiteWrapper>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    connectFamily: file(
      relativePath: { eq: "video-callout-connect-family.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 623) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    connectStaff: file(
      relativePath: { eq: "video-callout-connect-staff.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 623) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
