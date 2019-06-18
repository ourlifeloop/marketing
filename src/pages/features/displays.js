import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Digital Signange Software for assisted living communities | LifeLoop"
  >
    <TitleSection header="Digital Signage">
      <p>
        Digital signage with LifeLoop is a low cost, easy to deploy solution for
        your community. The only hardware you need is an Amazon FireStick making
        this an impressive, yet affordable digital signage option to implement
        for your residents.
      </p>
    </TitleSection>
    <ImageSection
      title="A Fully Custom Solution"
      description="Easily incorporate your brand elements, share birthdays, photos and display the local weather throughout your community from any television. LifeLoop offers you an unlimited number of unique displays allowing you the option to customize displays by room, location, etc."
      image={data.custom.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Seamlessly Sync With Your Activity Calendar"
      description="TV displays with LifeLoop will automatically pull over your activity calendar and update in real time.  Community guests and residents alike will enjoy seeing the daily activities in this highly visual format."
      image={data.sync.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Enhance Resident Engagement In An Affordable Way"
      description="Digital signage with LifeLoop is a low cost, easy to deploy solution for your community.  The only hardware you need is an Amazon FireStick making this an impressive, yet affordable digital signage option to implement for your residents."
      image={data.sync.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Compatible With In-Room Channels"
      description="If your community has an in-room channel, you can easily show your displays in this format allowing you to broadcast this information in all of your residents’ rooms."
      image={data.sync.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    custom: file(relativePath: { eq: "fully-custom-solution.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    sync: file(relativePath: { eq: "seamlessly-sync.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
