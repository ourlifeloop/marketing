import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper pathname={location.pathname}>
    <TitleSection header="Activity Calendars">
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
      title="Save Time"
      description="Simplify the process of entering activities and build out future calendars with LifeLoop’s reoccurring activity features. This allows you to stay up-to-date on calendars that show activities and spend extra time with your residents."
      image={data.saveTime.childImageSharp.fluid}
    />
    <ImageSection
      title="Design Calendars That Stand Out"
      description="The LifeLoop Calendar Designer makes it simple and efficient for your team to design, manage and download calendars each month for your community. Calendars can be printed on your own or professionally printed with Activity Connection. Need a branded template? Just let us know!"
      image={data.designer.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Keeping You Data-Informed"
      description="With LifeLoop’s reporting feature, you can build robust activity calendars based on your residents likes. Easily identify the most popular and least popular activities every month which allows you to measure, manage and optimize resident engagement."
      image={data.dataInformed.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Endless Integration"
      description="As with anything in LifeLoop, you can expect a seamless integration from your calendar to other features within the platform. Your calendar can be automatically shared and updated real-time on your website, on your displays, in the resident portal and in the family mobile app for no additional cost."
      image={data.integration.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    designer: file(relativePath: { eq: "calendar-designer.png" }) {
      childImageSharp {
        fluid(maxWidth: 1400) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    dataInformed: file(relativePath: { eq: "data-informed.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    integration: file(relativePath: { eq: "endless-integration.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    saveTime: file(relativePath: { eq: "save-time.png" }) {
      childImageSharp {
        fluid(maxWidth: 860) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
