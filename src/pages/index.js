import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import HeaderTextSection from '../primitives/header.text.section';
import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import Header from '../components/header';
import Footer from '../components/footer';
import Layout from '../primitives/layout';

import styles from './index.module.scss';

export default ({ data }) => (
  <>
    <Header transparent />
    <div className={styles.relativeContainer}>
      <Img
        className={styles.heroImage}
        fluid={data.hero.childImageSharp.fluid}
      />
      <Layout className={styles.layout}>
        <FlexContainer
          className={styles.heroContainer}
          direction="column"
          justify="center"
        >
          <h1 className={styles.title}>
            Enhancing Resident & Family Engagement Through Technology
          </h1>
          <p className={styles.titleDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            in scelerisque augue. Sed consectetur arcu sed orci hendrerit
            tempor.
          </p>
        </FlexContainer>
      </Layout>
    </div>
    <HeaderTextSection
      header="Headline Goes Right Here"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          scelerisque augue. Sed consectetur arcu sed orci hendrerit tempor. Nam
          sodales lorem blandit. Curabitur in scelerisque augue. Sed consectetur
          arcu sed orci hendrerit tempor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Curabitur in scelerisque augue. Sed
          consectetur arcu sed orci hendrerit tempor. Nam sodales lorem blandit.
          Curabitur in scelerisque augue. Sed consectetur arcu sed orci
          hendrerit tempor."
    />
    <HeaderTextSection
      header="Join more than 100 communities who are creating a better connection."
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in
          scelerisque augue. Sed consectetur arcu sed orci hendrerit tempor. Nam
          sodales lorem blandit. Curabitur in scelerisque augue. Sed consectetur
          arcu sed orci hendrerit tempor. Lorem ipsum dolor sit amet."
    />
    <HeaderTextSection
      secondary
      header="Explore how LifeLoop can help connect your community."
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in scelerisque augue. Sed consectetur arcu sed orci hendrerit tempor. Nam sodales lorem blandit. Curabitur in scelerisque augue. Sed consectetur arcu sed orci hendrerit tempor."
    >
      <Link to="/demo">
        <Button>Request a Demo</Button>
      </Link>
    </HeaderTextSection>
    <Footer />
  </>
);

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home-hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 600, quality: 100, toFormat: JPG, fit: COVER) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
