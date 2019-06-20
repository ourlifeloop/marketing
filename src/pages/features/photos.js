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
        Photo and video sharing through the LifeLoop portals and mobile app
        ensures that family members have a unique window into the daily lives of
        their loved ones. Capture and share the moments that make life
        wonderful, keeping friends and family engaged.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="Organize All Of Your Community Photos"
      description="With no storage limits, you can easily access all of your community photos within LifeLoop. Photos will be organized by month in your photo library allowing you to easily sort and filter as needed."
      image={data.organize.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Tag Residents In Special Moments"
      description="Taking photos as bingo? Great! Tag residents in photos which allows those photos to show up in their resident profile and be shared with family members."
      image={data.tag.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Set Your Community Apart"
      description="The ability to share photos on a daily basis with connected family members gives your community a competitive advantage to potential residents and their families."
      image={data.photoAndVideo.childImageSharp.fluid}
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
    photoAndVideo: file(relativePath: { eq: "photo-and-video-sharing.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
