import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper pathname={location.pathname}>
    <TitleSection header="Family Portal">
      <p>
        Family members lean on LifeLoop to keep them up-to-date on the lives and
        care of their loved ones no matter where they are. The family portal
        sparks a genuine connection between family members and staff members and
        helps foster communication between residents and their families.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="Photo & Video Sharing"
      description="Capture and share the moments that make life special! The LifeLoop family portal and mobile app offers you the ability to share photos/videos with your loved one and see any photos the community takes as well."
      image={data.photoAndVideo.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Real-Time Access"
      description="Get a window into your loved ones world with 24/7 access to their activity feed. Stay in constant contact with community staff and so much more from the convenience of your LifeLoop mobile app."
      image={data.access.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Proactive, Detailed Weekly Email"
      description="Family members will receive a weekly email that highlights, in depth, their loved ones activity and attendance for the week. This customizable weekly summary keeps families informed even when they are on-the-go."
      image={data.email.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Making Requests Has Never Been Easier"
      description="With the transportation feature in LifeLoop, you can easily manage and schedule ride requests for your loved one. With the maintenance feature, you can input maintenance requests on behalf of your loved one and receive progress updates and a detailed history log."
      image={data.requests.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    photoAndVideo: file(relativePath: { eq: "photo-and-video-sharing.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    access: file(relativePath: { eq: "real-time-access.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    requests: file(relativePath: { eq: "requests.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    email: file(relativePath: { eq: "weekly-email.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
