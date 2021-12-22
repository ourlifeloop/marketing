import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function ResidentPortalFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Software for active residents at assisted living comunities | LifeLoop"
    >
      <TitleSection header="Resident Portal">
        <p>
          LifeLoop provides a user-friendly platform to help residents stay
          connected to their family, friends, and community. Easily register for
          activities, message loved ones and receive important community
          announcements from any device with internet access.
        </p>
      </TitleSection>
      <ImageSection
        rightImage
        title="Maximize Their Independence"
        description="Within the senior living industry, it is widely acknowledged that engaging the resident and their family members with technology can have a positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge."
        image={getImage(data.independence)}
      />
      <ImageSection
        leftImage
        title="Built In Reminders"
        description="The LifeLoop resident portal will send residents reminders to attend events and meals before the event takes place. This is a great way to keep attendance high at your activities."
        image={getImage(data.reminders)}
      />
      <ImageSection
        rightImage
        title="Ease Of Use"
        description="The simplistic design of the LifeLoop resident portal makes it easy to navigate. Even better, this can be viewed on several types of devices: desktops, laptops, tablets or mobile phones. LifeLoop is compatible with both apple and android devices."
        image={getImage(data.ease)}
      />
      <ImageSection
        leftImage
        title="Keep Residents In The Loop"
        description="Within the portal, residents can view daily, weekly and monthly activities as well as register for those activities directly from their device. Residents can also view photos and videos that family members have shared."
        image={getImage(data.loop)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    independence: file(relativePath: { eq: "maximize-independence.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    loop: file(relativePath: { eq: "keep-residents-in-the-loop.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    ease: file(relativePath: { eq: "ease-of-use.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    reminders: file(relativePath: { eq: "built-in-reminders.png" }) {
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
