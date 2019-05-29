import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import FlexContainer from '../primitives/flex-container';
import Header from '../components/header';
import Layout from '../components/layout';
import Footer from '../components/footer';

import styles from './index.module.scss';

export default ({ data }) => {
  return (
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
      <Layout>
        <h1>Home</h1>
      </Layout>
      <Footer />
    </>
  );
};

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
