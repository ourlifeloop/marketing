import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function ContentFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Engagement without hardware, connection without limits"
    >
      <TitleSection header="Next Generation LifeLoop, with Content Powered by iN2L">
        <p>
          Introducing iN2L content in LifeLoop! By combining the power of iN2L’s person-centered
          content with LifeLoop’s web and mobile app-based solutions, caregivers and residents can
          now experience the impact of these two powerful solutions at their fingertips, no matter
          where they are.
        </p>
      </TitleSection>
      <ImageSection
        leftImage
        title="Engagement without Hardware, Connection without Limits"
        description="Our combined goal is to empower your community to drive purposeful connection, meaningful engagement, and operational excellence…from any device! The connection and engagement your residents and families desire is now in one more powerful platform."
        image={getImage(data.connectionWithoutLimits)}
      />
      <ImageSection
        rightImage
        title="Get Content From Any Device in Any Location"
        description="Take your senior living community to the next level by allowing residents to access content in their room or during formal activities. They can also find content customized to their unique, individual interests. On the staff side, they can easily utilize content in group or individual care settings, no matter what type of device they have."
        image={getImage(data.anyDeviceAnyLocation)}
      />
      <ImageSection
        leftImage
        title="Engage Residents at All Levels of Care"
        description="In addition to being engaging and fun, the content library is purposefully designed and curated to address all the core dimensions of wellness, ensuring that communities can leverage a single solution for all levels of care, from independent living to memory care."
        image={getImage(data.anyDeviceAnyLocation)}
      />
      <ImageSection
        rightImage
        title="Building a Robust Activity Calendar Has Never Been Easier"
        description="Cut down on the time it takes to plan purposeful activities by leveragingthe vast content library to engage residents in group activities. Easily utilize activity reporting to ensure you are offering enough activities and engagement to satisfy your residents’ changing needs."
        image={getImage(data.saltbox)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    connectionWithoutLimits: file(relativePath: { eq: "connection-without-limits.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    anyDeviceAnyLocation: file(relativePath: { eq: "any-device-any-location.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    saveTime: file(relativePath: { eq: "save-time.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    saltbox: file(relativePath: { eq: "saltbox.png" }) {
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
