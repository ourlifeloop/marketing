import React, { useState } from 'react';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import Img from 'gatsby-image';

import ActionCallout from '../primitives/action-callout';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import SiteWrapper from '../components/site-wrapper';
import DemoSection from '../components/demo-section';
import VideoModal from '../primitives/video-modal';
import HeroImage from '../primitives/hero-image';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Button from '../primitives/button';

import styles from './benefits.module.scss';

export default ({ data }) => {
  const [video, setVideo] = useState();
  const { isMobile } = useDevice();

  return (
    <SiteWrapper title="Keeping family, residents and staff conneceted and engaged | LifeLoop">
      <HeroImage
        direction="right"
        height="400px"
        objectPosition="30% 30%"
        image={data.hero.childImageSharp.fluid}
        title="Set your community apart"
        description="LifeLoop is a proven sales & marketing tool for your community. Our platform will set your community apart from the rest by empowering staff, engaging families and impacting residents."
      />
      <TitleSection header="A solution for every department.">
        <p>
          LifeLoop is a full-service solution which allows your community to
          consolidate all of your operational platforms into one, easy-to-use
          system. Our product is proven to provide results that can benefit
          clients both large and small. With LifeLoop, you will gain an
          experienced partner who can help you achieve your desired outcomes,
          create efficiencies and set your community apart.
        </p>
        <p className={styles.emphasized}>
          Being “in the loop” means always having the latest information at your
          fingertips.
        </p>
      </TitleSection>
      <Section>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            onClick={() =>
              setVideo({
                link: 'https://www.youtube-nocookie.com/embed/XQDtfhPTgNo',
                title: 'Life Enrichment Directors & Residents',
              })
            }
          >
            <Img fluid={data.connectResidents.childImageSharp.fluid} />
            <h2 className={styles.videoHeader}>Residents</h2>
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
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            onClick={() =>
              setVideo({
                link: 'https://www.youtube-nocookie.com/embed/DucvjjOT0bs',
                title: 'Connecting Residents & Family',
              })
            }
          >
            <Img fluid={data.connectFamily.childImageSharp.fluid} />
            <h2 className={styles.videoHeader}>Family</h2>
            <p>
              Allowing families the transparency they want and the access they
              deserve is central to our mission and vision. With LifeLoop, you
              can capture and share insights with family members and provide
              detailed context on their loved one’s daily lives. For family
              members, LifeLoop provides one, easy place to go for communication
              allowing you to get in touch with your loved ones caregivers
              across all levels.
            </p>
            <p>Peace-of-mind, real time updates, communication</p>
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
    hero: file(relativePath: { eq: "benefits-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    connectFamily: file(
      relativePath: { eq: "video-callout-connect-family.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 623) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    connectResidents: file(
      relativePath: { eq: "video-callout-connect-residents.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 623) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
