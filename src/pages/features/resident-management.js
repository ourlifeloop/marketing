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
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.quantify.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Empower Your Staff"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.empower.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Person-Centered Care"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.care.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Create Efficiencies"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
      image={data.efficiencies.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="A Trusted, HIPPA Compliant Platform"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam faucibus vitae augue ornare ultrices. Nullam a elementum nisi. Aenean pulvinar finibus pharetra. Integer ornare euismod enim id dictum. Donec id nisi id sapien sagittis pharetra. Quisque mi purus, fermentum mattis tortor vel, pulvinar condimentum tellus."
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
