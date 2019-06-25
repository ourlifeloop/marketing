import React from 'react';
import { Link, graphql } from 'gatsby';

import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import SiteWrapper from '../components/site-wrapper';
import DemoSection from '../components/demo-section';
import HeroImage from '../primitives/hero-image';
import Button from '../primitives/button';

import styles from './benefits.module.scss';

export default ({ data }) => (
  <SiteWrapper title="Keeping family, residents and staff conneceted and engaged | LifeLoop">
    <HeroImage
      direction="right"
      height="400px"
      objectPosition="30% 85%"
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
          logo: data.cascadia.childImageSharp.fixed,
          quote:
            "LifeLoop's valuable to us because the present and the future of our industry is to keep family members more and more involved in our residents' lives. Family members are naturally curious about what's going on with their loved ones, and LifeLoop is both a proactive and reactive way of helping with that.",
          author: 'Thomas Cloutier',
          position: 'Vice President of Operations',
        },
        {
          logo: data.fieldstone.childImageSharp.fixed,
          quote:
            "I have worked with Life Loop since its beginnings and I continue to be impressed with the continued growth and improvement of the product. Our families enjoy the information and photos they get daily, a kind of a window into their loved one's day, and our staff relies on the communication and attendance tracking.",
          author: 'Lucie Flood',
          position: 'Life Enrichment Director',
        },
        {
          logo: data.dial.childImageSharp.fixed,
          quote:
            'In this industry, employee turnover is common, unfortunately, and it can be very difficult to bring new staff up to speed. An easy system like this really helps. And it can even help build a consistent company culture, even as staff rotates.',
          author: 'Lisa Moes',
          position: 'Dial Retirement Communities',
        },
      ]}
    />
    <DemoSection />
  </SiteWrapper>
);

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "features-hero.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2000) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    cascadia: file(relativePath: { eq: "cascadia-logo.png" }) {
      childImageSharp {
        fixed(width: 220, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dial: file(relativePath: { eq: "dial-logo.png" }) {
      childImageSharp {
        fixed(width: 150, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldstone: file(relativePath: { eq: "fieldstone-logo.png" }) {
      childImageSharp {
        fixed(width: 280, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
