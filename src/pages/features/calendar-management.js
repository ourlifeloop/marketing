import React from 'react';
import { graphql } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';

import FeatureWrapper from '../../components/feature-wrapper';
import TitleSection from '../../primitives/title.section';
import ImageSection from '../../primitives/image-section';

export default function CalendarManagementFeature({ data, location }) {
  return (
    <FeatureWrapper
      pathname={location.pathname}
      title="Schedule, track and analyze resident activities and events on our powerful assisted living activity community calendar | LifeLoop"
    >
      <TitleSection header="Simplified Calendar Management">
        <p>
          Looking for a way to simplify your assisted living activity calendar
          or enhance your activity calendar for your skilled nursing, memory
          care or independent living facility? LifeLoop has helped communities
          of all sizes effectively develop, communicate and display their
          calendar.
        </p>
      </TitleSection>
      <ImageSection
        leftImage
        title="Save Time"
        description="Simplify the process of entering activities and build out future calendars with LifeLoop’s reoccurring activity features. This allows you to stay up-to-date on calendars that show activities and spend extra time with your residents."
        image={getImage(data.saveTime)}
      />
      <ImageSection
        rightImage
        title="Create a Reservation System"
        description="Does your community have a hair salon, fitness studio or private dining room? Simplify your scheduling by setting up time slots. With this functionality, both residents and staff can easily make reservations, so everyone is in-the-know on availability. Even better, use this feature streamline 1:1 meetings with residents and simplify concierge communication."
        image={getImage(data.timeSlots)}
      />
      <ImageSection
        leftImage
        title="Keeping You Data-Informed"
        description="With LifeLoop’s reporting feature, you can build robust activity calendars based on your residents likes. Easily identify the most popular and least popular activities every month which allows you to measure, manage and optimize resident engagement."
        image={getImage(data.dataInformed)}
      />
      <ImageSection
        rightImage
        title="Endless Integration"
        description="As with anything in LifeLoop, you can expect a seamless integration from your calendar to other features within the platform. Your calendar can be automatically shared and updated real-time on your website, on your displays, in the resident portal and in the family mobile app for no additional cost."
        image={getImage(data.integration)}
      />
    </FeatureWrapper>
  );
}

export const query = graphql`
  {
    dataInformed: file(relativePath: { eq: "data-informed.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    integration: file(relativePath: { eq: "endless-integration.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    saveTime: file(relativePath: { eq: "save-time.png" }) {
      childImageSharp {
        gatsbyImageData(
          height: 600
          layout: CONSTRAINED
          quality: 80
          placeholder: BLURRED
        )
      }
    }
    timeSlots: file(relativePath: { eq: "time-slots.png" }) {
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
