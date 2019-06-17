import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Maintenance software for assisted living communities | LifeLoop"
  >
    <TitleSection header="Maintenance">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus
        vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar
        finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi
        id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor
        vel, pulvinar condimentum tellus.
      </p>
    </TitleSection>
    <ImageSection
      rightImage
      title="A Full Maintenance Management System"
      description="Input and manage maintenance requests with live progress updates and a detailed history log. Easily view the status of each request and sort by approved and pending requests. Take it a step further by inputting preventative maintenance reminders."
      image={data.management.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Customize Your Experience"
      description="Quickly filter requests by crew member, resident, room number or community location. In addition, print and view to-do lists for each member of the maintenance team."
      image={data.experience.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="On-Demand Access"
      description="The LifeLoop maintenance management system is accessible from any apple or android device making it easy to use no matter where you are. The full-service maintenance feature is one of many features offered on the LifeLoop mobile app."
      image={data.demand.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Resident & Family Requests"
      description="Residents and family members can request maintenance via the LifeLoop mobile app or online portal. This is an optional feature that communities can choose to utilize at their discretion."
      image={data.demand.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    management: file(
      relativePath: { eq: "full-maintenance-management-system.png" }
    ) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    experience: file(relativePath: { eq: "customize-experience.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    demand: file(relativePath: { eq: "on-demand-requests.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
