import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Photo and video sharing app for seniors | LifeLoop"
  >
    <TitleSection header="Photo & Video Sharing">
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
      title="Organize All Of Your Community Photos"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.organize.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Tag Residents In Special Moments"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.tag.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    organize: file(relativePath: { eq: "organize-community-photos.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    tag: file(relativePath: { eq: "tag-residents.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
