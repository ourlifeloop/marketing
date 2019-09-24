import React from 'react';
import { graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import TrainingTopic from '../components/training-topic';
import { sortBy, startCase } from '../utils/lodash';

export default function TrainingTemplate({ data, pageContext }) {
  const videos = sortBy(
    data.allMarkdownRemark.edges
      .filter(edge => !!edge.node.frontmatter.cover)
      .map(edge => ({
        key: edge.node.id,
        ...edge.node.frontmatter,
      })),
    'title',
  );
  return (
    <TrainingWrapper
      title={`LifeLoop Training - ${startCase(pageContext.topic)}`}
    >
      <TrainingTopic topic={pageContext.topic} videos={videos} />
    </TrainingWrapper>
  );
}

export const query = graphql`
  query($topic: String!) {
    allMarkdownRemark(filter: { frontmatter: { topics: { eq: $topic } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            video
            isNew
            cover {
              childImageSharp {
                fixed(width: 275, quality: 90) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`;
