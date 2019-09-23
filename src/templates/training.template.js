import React from 'react';
import { graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import { startCase } from '../utils/lodash';

export default function TrainingTemplate({ data, pageContext }) {
  const videos = data.allMarkdownRemark.edges.map(
    edge => edge.node.frontmatter,
  );
  const title = startCase(pageContext.topic);
  return (
    <TrainingWrapper title={`LifeLoop Training - ${title}`}>
      <h1>{title}</h1>
    </TrainingWrapper>
  );
}

export const query = graphql`
  query($topic: String!) {
    allMarkdownRemark(filter: { frontmatter: { topics: { eq: $topic } } }) {
      edges {
        node {
          frontmatter {
            title
            video
            isNew
            cover {
              childImageSharp {
                fluid(maxWidth: 100, quality: 80) {
                  presentationWidth
                }
              }
            }
          }
        }
      }
    }
  }
`;
