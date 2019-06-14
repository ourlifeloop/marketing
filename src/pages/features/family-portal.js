import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper pathname={location.pathname}>
    <TitleSection header="Family Portal">
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
      title="Photo & Video Sharing"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.photoAndVideo.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Real-Time Access"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.access.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Proactive, Detailed Weekly Email"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.email.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Making Requests Has Never Been Easier"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.requests.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    photoAndVideo: file(relativePath: { eq: "photo-and-video-sharing.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    access: file(relativePath: { eq: "real-time-access.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    requests: file(relativePath: { eq: "requests.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    email: file(relativePath: { eq: "weekly-email.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
