import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Messaging software that keeps family, residents and staff connected at assisted living communities | LifeLoop"
  >
    <TitleSection header="Communication">
      <p>
        Residents, family and staff are in constant contact creating a strong
        community environment.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="Seamless Flow of Communication"
      description="With the announcements feature in LifeLoop, you can broadcast messages to all staff, family and residents who are connected. Having an event at your community and want to inform family members? Send a broadcast announcement through LifeLoop and families will get notified in the family portal/mobile app as well as their email. Effortlessly add attachments, photos, or whatever you like."
      image={data.flow.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Inform Your Staff"
      description="Staff can easily message back and forth within LifeLoop and have records of all contacts with other staff members, family members and residents. Allowing staff members to be in constant contact and in-the-know creates a strong community environment and helps with retention."
      image={data.inform.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Transparancy With Your Residents' Families"
      description="The messaging feature allows family members the transparency they want and the access they deserve. With LifeLoop, all connected family members can see the staff directory and easily send messages to the appropriate staff member. Even better, family members can send messages to their loved one as well."
      image={data.transparency.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Residents Maintain Sense Of Independence"
      description="Within the senior living industry, it is widely acknowledged that engaging the resident and their family members with technology can have positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge. This platform was made custom with residents in mind and is easy for them to learn and use."
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
