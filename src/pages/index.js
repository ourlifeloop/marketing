import React from 'react';
import { graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import Header from '../components/header';
import Layout from '../components/layout';

import styles from './index.module.scss';

export default ({ data }) => {
  return (
    <>
      <Header backgroundImage={data.hero.childImageSharp.fluid}>
        <Layout className={styles.layout}>
          <FlexContainer
            className={styles.heroContainer}
            direction="column"
            justify="center"
          >
            <h1 className={styles.title}>
              Enhancing Resident
              <br />& Family Engagement Through Technology
            </h1>
            <p className={styles.titleDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              in scelerisque augue. Sed consectetur arcu sed orci hendrerit
              tempor.
            </p>
          </FlexContainer>
        </Layout>
      </Header>
      <Layout>
        <h1>Home</h1>
      </Layout>
    </>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home-hero.png" }) {
      childImageSharp {
        fluid(maxHeight: 700, quality: 100, toFormat: JPG, fit: COVER) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
  }
`;
