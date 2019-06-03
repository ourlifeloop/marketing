import React from 'react';

import SiteWrapper from '../components/site-wrapper';
import HeroImage from '../primitives/hero-image';

export default ({ data }) => (
  <SiteWrapper>
    <HeroImage
      height="500px"
      image={data.hero.childImageSharp.fluid}
      direction="right"
      title="We Saw a Need"
      description="As an Activity Director, you’re busy planning events, managing your staff, and trying to engage your residents. It gets overwhelming trying to meet the needs of every individual."
      objectPosition="100% 35%"
    />
  </SiteWrapper>
);

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "our-story-hero.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 500, quality: 100, cropFocus: ENTROPY) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
