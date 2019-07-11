import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Software for active residents at assisted living comunities | LifeLoop"
  >
    <TitleSection header="Resident Portal">
      <p>
        Within the senior living industry, it is widely acknowledged that
        engaging the resident and their family members with technology can have
        positive impact on the life of the resident, help alleviate social
        isolation and give your community a competitive edge.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="Maximize Their Independence"
      description="Within the senior living industry, it is widely acknowledged that engaging the resident and their family members with technology can have a positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge."
      image={data.independence.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Built In Reminders"
      description="The LifeLoop resident portal will send residents reminders to attend events and meals before the event takes place. This is a great way to keep attendance high at your activities."
      image={data.reminders.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Ease Of Use"
      description="The simplistic design of the LifeLoop resident portal makes it easy to navigate. Even better, this can be viewed on several types of devices: desktops, laptops, tablets or mobile phones. LifeLoop is compatible with both apple and android devices."
      image={data.ease.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Keep Residents In The Loop"
      description="Within the portal, residents can view daily, weekly and monthly activities as well as register for those activities directly from their device. Residents can also view photos and videos that family members have shared."
      image={data.loop.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    independence: file(relativePath: { eq: "maximize-independence.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    loop: file(relativePath: { eq: "keep-residents-in-the-loop.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    ease: file(relativePath: { eq: "ease-of-use.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    reminders: file(relativePath: { eq: "built-in-reminders.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
