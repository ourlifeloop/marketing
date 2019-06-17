import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Digital Signange Software for assisted living communities | LifeLoop"
  >
    <TitleSection header="TV Displays">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus
        vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar
        finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi
        id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor
        vel, pulvinar condimentum tellus.
      </p>
    </TitleSection>
    <ImageSection
      title="A Fully Custom Solution"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.custom.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Seamlessly Sync With Your Activity Calendar"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.sync.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Enhance Resident Engagement In An Affordable Way"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.sync.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Compatible With In-Room Channels"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.sync.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    custom: file(relativePath: { eq: "fully-custom-solution.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    sync: file(relativePath: { eq: "seamlessly-sync.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
