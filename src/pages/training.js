import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import Section from '../primitives/section';
import Button from '../primitives/button';

import styles from './training.module.scss';

export default ({ data }) => {
  return (
    <TrainingWrapper
      header={
        <FlexContainer direction="column" align="center">
          <TitleSection header="How Can We Help?" width="small">
            <p>
              Welcome to the LifeLoop Learning Community, built especially for
              staff members! LifeLoop makes it easy for staff to manage a
              community. However, we understand that with the many features, it
              is a learning process to properly utilize LifeLoop. This page is
              dedicated to easing your learning experience and getting
              comfortable with using LifeLoop.
            </p>
            <Link to="/training">
              <Button>New to LifeLoop? Start Here</Button>
            </Link>
          </TitleSection>
        </FlexContainer>
      }
    >
      <Section width="medium">
        <h2 className={styles.topicHeader}>Browse by Topic</h2>
        <FlexContainer flex="1" wrap>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.gettingStarted.childImageSharp.fluid} />
            <span>Getting Started</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.calendar.childImageSharp.fluid} />
            <span>Activity Calendar</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.reports.childImageSharp.fluid} />
            <span>Resident Management</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.photos.childImageSharp.fluid} />
            <span>Photos</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.messages.childImageSharp.fluid} />
            <span>Messaging</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.maintenance.childImageSharp.fluid} />
            <span>Maintenance</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.transportation.childImageSharp.fluid} />
            <span>Transportation</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.displays.childImageSharp.fluid} />
            <span>Displays</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.residents.childImageSharp.fluid} />
            <span>Resident Portal</span>
          </Link>
          <Link to="/" className={styles.topic}>
            <Img fluid={data.family.childImageSharp.fluid} />
            <span>Family Portal</span>
          </Link>
        </FlexContainer>
      </Section>
    </TrainingWrapper>
  );
};

export const query = graphql`
  fragment featureImage on File {
    childImageSharp {
      fluid(maxWidth: 186) {
        ...GatsbyImageSharpFluid
      }
    }
  }

  query {
    calendar: file(relativePath: { eq: "features/calendar.png" }) {
      ...featureImage
    }
    displays: file(relativePath: { eq: "features/displays.png" }) {
      ...featureImage
    }
    family: file(relativePath: { eq: "features/family.png" }) {
      ...featureImage
    }
    gettingStarted: file(relativePath: { eq: "features/getting-started.png" }) {
      ...featureImage
    }
    maintenance: file(relativePath: { eq: "features/maintenance.png" }) {
      ...featureImage
    }
    messages: file(relativePath: { eq: "features/messages.png" }) {
      ...featureImage
    }
    photos: file(relativePath: { eq: "features/photos.png" }) {
      ...featureImage
    }
    reports: file(relativePath: { eq: "features/reports.png" }) {
      ...featureImage
    }
    residents: file(relativePath: { eq: "features/residents.png" }) {
      ...featureImage
    }
    transportation: file(relativePath: { eq: "features/transportation.png" }) {
      ...featureImage
    }
  }
`;
