import React from 'react';
import { graphql } from 'gatsby';

import Header from '../components/header';
import Layout from '../components/layout';

export default ({ data }) => {
  return (
    <>
      <Header backgroundImage={data.hero.childImageSharp.fluid} />
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
