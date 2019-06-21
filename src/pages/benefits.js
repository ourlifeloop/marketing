import React from 'react';
import { graphql } from 'gatsby';

import SiteWrapper from '../components/site-wrapper';
import HeroImage from '../primitives/hero-image';
import Layout from '../primitives/layout';

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
    <Layout>
      <h1>Benefits</h1>
    </Layout>
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
  }
`;
