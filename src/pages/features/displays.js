import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import EmbeddedDisplay from '../../components/embedded-display';
import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function DisplaysFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Digital Signange Software for assisted living communities | LifeLoop"
    >
      <TitleSection header="Digital Signage">
        <p>
          Digital signage with LifeLoop is a low cost, easy to deploy solution
          for your community and an excellent way to increase resident
          engagement. The only hardware you need is an Amazon FireStick making
          this an impressive, yet affordable digital signage option to implement
          for your residents.
        </p>
      </TitleSection>
      <ImageSection
        noTopPadding
        title="A Fully Custom Solution"
        description="Easily incorporate your brand elements, share birthdays, photos and display the local weather throughout your community from any television. LifeLoop offers you an unlimited number of unique displays allowing you the option to customize displays by room, location, etc."
        image={getImage(data.custom)}
      />
      <ImageSection
        rightImage
        title="Seamlessly Sync With Your Activity Calendar"
        description="TV displays with LifeLoop will automatically pull over your activity calendar and update in real time.  Community guests and residents alike will enjoy seeing the daily activities in this highly visual format."
        image={getImage(data.sync)}
      />
      <ImageSection
        leftImage
        title="Livestream Directly To Your Digital Signage"
        description="Communities can easily livestream directly to their digital signage opening up endless possibilities for promoting upcoming activities, sharing activities directly to residents' rooms, displaying video marketing materials in the lobby, and so much more. Adding this feature allows our clients to share pre-recorded videos at any time or at any location around their community and makes way for increased engagement in a new, exciting way."
        image={getImage(data.livestream)}
      />
      <ImageSection
        rightImage
        title="Compatible With In-Room Channels"
        description="If your community has an in-room channel, you can easily show your displays in this format allowing you to broadcast this information in all of your residents’ rooms."
        image={getImage(data.channels)}
      />
      <TitleSection header="Embedded Displays">
        <p>
          Easily add digital signage on your website by embedding your displays.
          This feature allows family members an opportunity to see what is going
          on day-to-day in your community and gives prospects a feel for the
          type of activities and events you offer.
        </p>
      </TitleSection>
      <EmbeddedDisplay url="https://lifeloopapp.com/preview/displays/dzp0di" />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    custom: file(relativePath: { eq: "fully-custom-solution.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 1000
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    sync: file(relativePath: { eq: "seamlessly-sync.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    channels: file(
      relativePath: { eq: "compatible-with-in-room-channels.png" }
    ) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    livestream: file(relativePath: { eq: "livestream.png" }) {
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
