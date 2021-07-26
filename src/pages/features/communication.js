import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function CommunicationFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Messaging software that keeps family, residents and staff connected at assisted living communities | LifeLoop"
    >
      <TitleSection header="Communication & Community Engagement">
        <p>
          LifeLoop was founded in 2015 based on the immense need for more
          communication between communities, residents and family members and
          that continues to be our guiding light today. Because of this, our
          communication platform is truly your all-in-one solution to create
          even greater operational efficiencies.
        </p>
      </TitleSection>
      <ImageSection
        rightImage
        title="Customize The Way You Communicate"
        description="Send out branded messages and announcements to staff, residents, family, community vendors and more. Having an event at your community or implementing new procedures and want to inform family members? Send a broadcast announcement through LifeLoop and families will get notified in the family portal/mobile app as well as their email. Effortlessly add attachments, photos, or whatever you like."
        image={getImage(data.flow)}
      />
      <ImageSection
        leftImage
        title="Distribute Secure Emergency Broadcast Messages"
        description="Quickly keep essential audiences informed with critical updates and relevant information. Stay compliant with new guidelines and publish time-sensitive messages easily via text and email leaving staff free to care for residents. "
        image={getImage(data.emergency)}
      />
      <ImageSection
        rightImage
        title="Inform Your Staff"
        description="Staff can easily message back and forth within LifeLoop and have records of all contacts with other staff members, family members and residents. Allowing staff members to be in constant contact and in-the-know creates a strong community environment and helps with retention."
        image={getImage(data.inform)}
      />
      <ImageSection
        leftImage
        title="Transparency With Your Residents' Families"
        description="The messaging feature allows family members the transparency they want and the access they deserve. With LifeLoop, all connected family members can see the staff directory and easily send messages to the appropriate staff member. Even better, family members can send messages to their loved one as well."
        image={getImage(data.transparency)}
      />
      <ImageSection
        rightImage
        title="Residents Maintain Sense Of Independence"
        description="Within the senior living industry, it is widely acknowledged that engaging the resident and their family members with technology can have a positive impact on the life of the resident, help alleviate social isolation and give your community a competitive edge. This platform was made custom with residents in mind and is easy for them to learn and use."
        image={getImage(data.independence)}
      />
      <ImageSection
        leftImage
        title="Customized Notifications"
        description="LifeLoop allows you to customize notifications and permissions based on each staff members individual preferences and needs. Notifications can be received as in-app notifications, texts and/or emails. Additionally, residents who are registered for an activity can receive a text message reminder 30 minutes before the activity takes place."
        image={getImage(data.notifications)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    inform: file(relativePath: { eq: "inform-your-staff.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    flow: file(relativePath: { eq: "seamless-flow.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    emergency: file(relativePath: { eq: "emergency-broadcast.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 599
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    transparency: file(relativePath: { eq: "transparency-with-family.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    independence: file(relativePath: { eq: "residents-independence.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    notifications: file(relativePath: { eq: "customized-notifications.png" }) {
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
