import React from 'react';
import { graphql } from 'gatsby';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default ({ data, location }) => (
  <FeatureWrapper
    pathname={location.pathname}
    title="Design calendars, newsletters, marketing pieces, menus and more all within the existing LifeLoop platform | LifeLoop"
  >
    <TitleSection header="Design Dashboard">
      <p>
        The LifeLoop Design Dashboard is a custom-made solution for senior
        living communities. With this feature you have complete freedom to
        design calendars, newsletters, marketing pieces, menus and more all
        within the existing LifeLoop platform.
      </p>
    </TitleSection>
    <ImageSection
      leftImage
      title="Calendar Designer"
      description="Easily design visually appealing calendars that can be completely customized with images, adjustable text sizes, anniversaries, birthdays and more. Calendars can be designed in one week, two week and full month formats based on what is best for your community. Create beautiful branded templates or fun monthly themes for your residents."
      image={data.calendarDesigner.childImageSharp.fluid}
    />
    <ImageSection
      rightImage
      title="Newsletter Designer"
      description="Creating newsletters has never been more efficient. The LifeLoop platform includes newsletter design capabilities so you don’t need multiple programs to produce and distribute publications from your community. Newsletters can be created in multiple sizes and easily printed from your computer, electronically published and sent to all connections or downloaded as an image file to print professionally. "
      image={data.newsletterDesigner.childImageSharp.fluid}
    />
    <ImageSection
      leftImage
      title="Marketing & More"
      description=" Build two-sided flyers, marketing brochures, menus and more with the Design Dashboard in LifeLoop. Add images, text, and custom colors to create beautiful branded pieces or social graphics for your community. "
      image={data.marketingDesigner.childImageSharp.fluid}
    />
  </FeatureWrapper>
);

export const query = graphql`
  query {
    calendarDesigner: file(relativePath: { eq: "calendar-designer.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    newsletterDesigner: file(relativePath: { eq: "newsletter-designer.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    marketingDesigner: file(relativePath: { eq: "marketing-designer.png" }) {
      childImageSharp {
        fluid(maxHeight: 600) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
