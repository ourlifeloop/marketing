import React from 'react';
import { graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import TrainingTopic from '../components/training-topic';
import { startCase } from '../utils/lodash';

const filterTypes = (data, uniqueKey) =>
  data.allMarkdownRemark.edges
    .filter(edge => !!edge.node.frontmatter[uniqueKey])
    .map(edge => ({
      key: edge.node.id,
      ...edge.node.frontmatter,
    }));

export default function TrainingTemplate({ data, pageContext }) {
  const videos = filterTypes(data, 'cover');
  const documents = filterTypes(data, 'document');
  const faqs = filterTypes(data, 'question');

  return (
    <TrainingWrapper
      title={`LifeLoop Training - ${startCase(pageContext.topic)}`}
    >
      <TrainingTopic
        topic={pageContext.topic}
        videos={videos}
        documents={documents}
        faqs={faqs}
      />
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
