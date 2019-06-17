import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Powerful and easy to use software for senior care management | LifeLoop."
  >
    <TitleSection header="Resident Tracking & Reporting">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus
        vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar
        finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi
        id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor
        vel, pulvinar condimentum tellus.
      </p>
    </TitleSection>
    <ImageSection
      leftImage
      title="Quantify Your Life Enrichment"
      description="With LifeLoop’s reporting feature, you can build robust activity calendars based on your residents likes. Easily identify the most popular and least popular activities every month which allows you to measure, manage and optimize resident engagement."
      image={data.quantify.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Empower Your Staff"
      description="Metrics can be shared between your staff and the resident’s family to track individual needs and create personalized care plans. LifeLoop’s dynamic resident reports can be created for a community, for a specific resident or by activity."
      image={data.empower.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Person-Centered Care"
      description="Understanding the residents flow of information is essential to maximizing their level of care and proactively identifying their needs. Capturing the full picture is the key to implementing person-centered care all while providing you with a distinct perspective into your residents’ lives."
      image={data.care.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Create Efficiencies"
      description="LifeLoop helps your staff create work flow efficiencies and slash documentation time. All that time spent ticking boxes and charting participation is time that can be spent dreaming up new activities or in direct contact with residents."
      image={data.efficiencies.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="A Trusted, HIPPA Compliant Platform"
      description="Keep all of your information in one, trusted location, accessible through one entry point. LifeLoop is fully complaint with HIPPA and can integrate with your clinical software."
      image={data.hippa.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    efficiencies: file(relativePath: { eq: "create-efficiencies.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    empower: file(relativePath: { eq: "empower-staff.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    hippa: file(relativePath: { eq: "hippa-compliant.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    care: file(relativePath: { eq: "person-centered-care.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    quantify: file(relativePath: { eq: "quantify-life-enrichment.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
