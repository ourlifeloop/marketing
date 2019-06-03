import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';

import SiteWrapper from '../components/site-wrapper';
import HeroImage from '../primitives/hero-image';
import Section from '../primitives/section';
import FlexContainer from '../primitives/flex-container';
import { useDevice } from '../utils/effects';

import styles from './our-story.module.scss';

export default ({ data }) => {
  const { isMobile } = useDevice();
  return (
    <SiteWrapper>
      <HeroImage
        height="500px"
        image={data.hero.childImageSharp.fluid}
        direction="right"
        title="We Saw a Need"
        description="As an Activity Director, you’re busy planning events, managing your staff, and trying to engage your residents. It gets overwhelming trying to meet the needs of every individual."
        objectPosition="100% 35%"
      />
      <Section>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer flex="1" direction="column">
            <h2>
              The idea stemmed from our
              <br />
              personal situation.
            </h2>
            <p>
              This photo is of my father-in-law, Lee, his two brothers and their
              mom. She lived in a senior living community and started on the
              independent side but quickly progressed to assisted living, then
              memory care. Unfortunately, this is a situation many families
              eventually arrive at but never find easy. Our family couldn’t help
              but wonder what warning signs we may have missed. This personal
              situation sparked us to think, “Can we make this better?”
            </p>
            <p>
              Fast-forward through the process of working closely with
              owners/operators to develop a software product that helps them
              provide better care and service to their customers while also
              enhancing family and resident engagement.
            </p>
            <p>
              Today helping families stay “in the loop” is our passion. Being
              "in the loop" means always having the latest information at your
              fingertips. LifeLoop ensures a flow of communication between
              residents, family members and staff.
            </p>
          </FlexContainer>
          <div
            className={classNames(styles.storyImage, {
              [styles.storyImageVertical]: isMobile,
            })}
          >
            <Img fluid={data.story.childImageSharp.fluid} />
          </div>
        </FlexContainer>
      </Section>
    </SiteWrapper>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "our-story-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1100) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    story: file(relativePath: { eq: "story-origin.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
