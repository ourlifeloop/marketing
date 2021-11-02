import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function ConnectionPortalFeature({ data, location }) {
  return (
    <FeatureWrapper pathname={location.pathname}>
      <TitleSection header="Connection Portal">
        <p>
          Family members lean on LifeLoop to keep them up-to-date on the lives
          and care of their loved ones no matter where they are. The connection
          portal sparks a genuine connection between family members and staff
          members and helps foster communication between residents and their
          families.
        </p>
      </TitleSection>
      <ImageSection
        rightImage
        title="Photo & Video Sharing"
        description="Capture and share the moments that make life special! The LifeLoop connection portal and mobile app offers you the ability to share photos/videos with your loved one and see any photos the community takes as well."
        image={getImage(data.photoAndVideo)}
      />
      <ImageSection
        leftImage
        title="Real-Time Access"
        description="Get a window into your loved ones world with 24/7 access to their activity feed. Stay in constant contact with community staff and so much more from the convenience of your LifeLoop mobile app."
        image={getImage(data.access)}
      />
      <ImageSection
        rightImage
        title="Proactive, Detailed Weekly Email"
        description="Family members will receive a weekly email that highlights, in depth, their loved ones activity and attendance for the week. This customizable weekly summary keeps families informed even when they are on-the-go."
        image={getImage(data.email)}
      />
      <ImageSection
        leftImage
        title="LifeLoop Express: Delivering Happiness"
        description="The LifeLoop Express allows family members to send their loved one a personalized postcard directly through our platform. Family members can log in to LifeLoop, select a postcard, and include a personal message and photo. So what's the best part? We do all the heavy lifting for you! LifeLoop takes care of the printing, mailing, and ensuring it gets delivered directly to the correct resident. It is guaranteed to deliver a smile."
        image={getImage(data.express)}
      />
      <ImageSection
        rightImage
        title="Making Requests Has Never Been Easier"
        description="With the transportation feature in LifeLoop, you can easily manage and schedule ride requests for your loved one. With the maintenance feature, you can input maintenance requests on behalf of your loved one and receive progress updates and a detailed history log."
        image={getImage(data.requests)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    photoAndVideo: file(relativePath: { eq: "photo-and-video-sharing.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    access: file(relativePath: { eq: "real-time-access.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    requests: file(relativePath: { eq: "requests.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    express: file(relativePath: { eq: "ll-express.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    email: file(relativePath: { eq: "weekly-email.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
  }
`;
