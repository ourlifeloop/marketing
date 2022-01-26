import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import LifeloopBigLogo from '../assets/icons/lifeloop-big-logo.svg';
import RelativeContainer from '../primitives/relative-container';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import SiteWrapper from '../components/site-wrapper';
import HeroImage from '../primitives/hero-image';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import TEAM from '../utils/team';

import {
  storyImage,
  storyImageVertical,
  missionContainer,
  missionInner,
  missionTitle,
  mission,
  missionLogo,
  missionLogoContainer,
  teamContainer,
  teamMember,
  joinSection,
  joinContainer,
  teamImage,
} from './our-story.module.scss';

export default function OurStory({ data }) {
  const { isMobile } = useDevice();

  return (
    <SiteWrapper title="Improving the care and overall experience of residents living in senior living communities | LifeLoop">
      <HeroImage
        height={isMobile ? '400px' : '500px'}
        image={data.hero.childImageSharp.gatsbyImageData}
        direction="right"
        title="We Saw A Need."
        description={
          'LifeLoop ensures a flow of communication between residents, family members and staff. Being "in the loop" means always having the latest information at your fingertips.'
        }
        objectPosition="100% 35%"
      />
      <Section>
        <FlexContainer
          align={isMobile ? 'initial' : 'center'}
          direction={isMobile ? 'column' : 'row'}
        >
          <FlexContainer flex="1" direction="column">
            <h2>
              In 2013, we had an idea
              <br />
              for LifeLoop
            </h2>
            <p>
              This photo is of my father-in-law, Lee, his two brothers and their
              mom. She moved into a senior living community and started on the
              independent side but quickly progressed to assisted living, and
              then memory care. Our family couldn’t help but wonder what warning
              signs we may have missed. This personal situation sparked us to
              think, “Can we make this better?”
            </p>
            <p>
              This led us to work closely with owners and operators of senior
              living communities to develop a software product that helps them
              provide better care and service to their customers while also
              enhancing family and resident engagement.
            </p>
            <b>Amy Johnson</b>
            <p>Co-Founder & CEO, LifeLoop</p>
          </FlexContainer>
          <div
            className={classNames(storyImage, {
              [storyImageVertical]: isMobile,
            })}
          >
            <GatsbyImage image={data.story.childImageSharp.gatsbyImageData} />
          </div>
        </FlexContainer>
      </Section>
      <Section>
        <RelativeContainer className={missionContainer}>
          <FlexContainer
            flex="1"
            direction="column"
            align="center"
            className={missionInner}
          >
            <p className={missionTitle}>OUR MISSION</p>
            <p className={mission}>
              Empower caregivers to create connection with individuals and their
              loved ones.
            </p>
            <p className={missionTitle}>OUR VISION</p>
            <p className={mission}>
              Help caregivers create communities that people love being a part
              of.
            </p>
          </FlexContainer>
          <FlexContainer
            className={missionLogoContainer}
            align="center"
            justify="center"
          >
            <LifeloopBigLogo className={missionLogo} />
          </FlexContainer>
        </RelativeContainer>
      </Section>
      <TitleSection header="Our Team">
        <p>
          We are a group of people who are constantly striving to improve our
          company, our product, our community and ourselves. We believe that
          aging is something to be embraced, not feared. At LifeLoop, a
          collaborative process is the foundation of our success and our
          culture.
        </p>
      </TitleSection>
      <Section noTopPadding>
        <FlexContainer flex="1" wrap className={teamContainer}>
          {TEAM.map(({ name, title, image }) => {
            const imageData = data[image];
            if (!imageData) {
              return null;
            }
            return (
              <div key={name} className={teamMember}>
                <GatsbyImage
                  image={imageData.childImageSharp.gatsbyImageData}
                />
                <b>{name}</b>
                <p>{title}</p>
              </div>
            );
          })}
        </FlexContainer>
      </Section>
      <Section className={joinSection} centered width="medium" noBottomPadding>
        <div className={joinContainer}>
          <h2>Join the LifeLoop Team</h2>
          <p>
            We care about our customers. We are problem solvers, we embrace
            growth and trust that everyone is here to foster their passion. If
            you are interested in applying for a position at LifeLoop, please
            send your resume to{' '}
            <a href={`mailto:${data.site.siteMetadata.careers}`}>
              {data.site.siteMetadata.careers}
            </a>
            .
          </p>
        </div>
      </Section>
      <RelativeContainer>
        <GatsbyImage
          image={data.team.childImageSharp.gatsbyImageData}
          className={teamImage}
        />
      </RelativeContainer>
    </SiteWrapper>
  );
}

export const query = graphql`
  {
    site {
      siteMetadata {
        careers
      }
    }
    hero: file(relativePath: { eq: "our-story-hero.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    story: file(relativePath: { eq: "story-origin.png" }) {
      childImageSharp {
        gatsbyImageData(width: 500, layout: CONSTRAINED)
      }
    }
    team: file(relativePath: { eq: "team.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED)
      }
    }
    ...teamImages
  }
`;
