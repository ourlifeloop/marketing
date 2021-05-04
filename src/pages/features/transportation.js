import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function TransportationFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Transportation software for assisted living communities | LifeLoop"
    >
      <TitleSection header="Transportation">
        <p>
          The management of your community’s transportation shouldn’t be
          cumbersome. Our transportation platform was specifically designed with
          senior living communities in mind.
        </p>
      </TitleSection>
      <ImageSection
        rightImage
        title="A Transportation Management System"
        description="The management of your community’s transportation shouldn’t be cumbersome. Our transportation platform was specifically designed with senior living communities in mind."
        image={getImage(data.management)}
      />
      <ImageSection
        leftImage
        title="Customize Your Experience"
        description="Quickly filter requests by driver, vehicle, resident, or location. In addition, print and view to-do lists for each member of the transportation team."
        image={getImage(data.customize)}
      />
      <ImageSection
        rightImage
        title="On-Demand Access"
        description="The LifeLoop transportation management system is accessible from any apple or android device making it easy to use no matter where you are. The full-service transportation module is one of many features offered on the LifeLoop mobile app and seamlessly integrates with Google Maps."
        image={getImage(data.onDemand)}
      />
      <ImageSection
        leftImage
        title="Resident & Family Requests"
        description="Residents and family members can request transportation via the LifeLoop mobile app or online portal. This is an optional feature that communities can choose to utilize at their discretion."
        image={getImage(data.resident)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    management: file(
      relativePath: { eq: "a-transportation-management-system.png" }
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
    customize: file(relativePath: { eq: "customize-requests.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    onDemand: file(relativePath: { eq: "on-demand-access.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    resident: file(
      relativePath: { eq: "resident-family-requests-transp.png" }
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
  }
`;
