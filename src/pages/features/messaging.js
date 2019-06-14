import React from 'react';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper pathname={location.pathname}>
    <TitleSection header="Communication">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus
        vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar
        finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi
        id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor
        vel, pulvinar condimentum tellus.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="Seamless Flow of Communication"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.flow.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Inform Your Staff"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.inform.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Transparancy With Your Residents' Families"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.transparency.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Residents Maintain Sense Of Independence"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.transparency.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    inform: file(relativePath: { eq: "inform-your-staff.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    flow: file(relativePath: { eq: "seamless-flow.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    transparency: file(relativePath: { eq: "transparency-with-family.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
