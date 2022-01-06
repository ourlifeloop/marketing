import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function WorkRequestFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Work Request software for assisted living communities | LifeLoop"
    >
      <TitleSection header="Work Requests">
        <p>
          The LifeLoop platform was designed for your senior living community.
          Our software clears the clutter making it easy to have a clear picture
          of what needs to be done for maintenance, housekeeping, IT and more.
        </p>
      </TitleSection>
      <ImageSection
        rightImage
        title="A full concierge management system"
        description="Input and manage requests with live progress updates and a detailed history log. Easily view the status of each request and sort by approved, pending, and completed requests. Take it a step further by inputting preventative and recurring reminders for your community."
        image={getImage(data.management)}
      />
      <ImageSection
        leftImage
        title="Customize Your Experience"
        description="Quickly filter requests by staff member, resident, room number or community location. In addition, print and view to-do lists for each member of the team."
        image={getImage(data.experience)}
      />
      <ImageSection
        rightImage
        title="On-Demand Access"
        description="Work requests with LifeLoop is accessible from any device with internet access making it easy to use no matter where you are. The full-service feature is one of many features offered on the LifeLoop mobile app."
        image={getImage(data.demand)}
      />
      <ImageSection
        leftImage
        title="Resident & Family Requests"
        description="Residents and family members can make requests via the LifeLoop mobile app or online portal. This is an optional feature that communities can choose to utilize at their discretion."
        image={getImage(data.resident)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    management: file(
      relativePath: { eq: "full-work-request-management-system.png" }
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
    experience: file(relativePath: { eq: "customize-experience.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    demand: file(relativePath: { eq: "on-demand-requests.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    resident: file(relativePath: { eq: "resident-family-requests-maint.png" }) {
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
