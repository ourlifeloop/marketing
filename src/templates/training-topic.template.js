import React from 'react';
import { graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import { startCase, uniq, flatten } from '../utils/lodash';
import TrainingTopic from '../components/training-topic';

const filterTypes = (data, uniqueKey) =>
  data.topic.edges
    .filter(edge => !!edge.node.frontmatter[uniqueKey])
    .map(edge => ({
      key: edge.node.id,
      ...edge.node.frontmatter,
    }));

export default function TrainingTopicTemplate({ data, pageContext }) {
  const videos = filterTypes(data, 'cover');
  const documents = filterTypes(data, 'document');
  const faqs = filterTypes(data, 'question');

  const topics = uniq(
    flatten(data.topics.edges.map(({ node }) => node.frontmatter.topics)),
  );

  return (
    <TrainingWrapper
      userType={pageContext.userType}
      title={`LifeLoop Training - ${startCase(pageContext.topic)}`}
    >
      <TrainingTopic
        userType={pageContext.userType}
        topic={pageContext.topic}
        topics={topics}
        videos={videos}
        documents={documents}
        faqs={faqs}
      />
    </TrainingWrapper>
  );
}

export const query = graphql`
  query($topic: String!, $userType: String!) {
    topics: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "^/training/" } }
        frontmatter: { userTypes: { eq: $userType } }
      }
    ) {
      edges {
        node {
          frontmatter {
            topics
          }
        }
      }
    }
    topic: allMarkdownRemark(
      filter: {
        frontmatter: { topics: { eq: $topic }, userTypes: { eq: $userType } }
      }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            video
            isNew
            question
            answer
            cover {
              childImageSharp {
                gatsbyImageData(width: 275, quality: 90, layout: FIXED)
              }
            }
            document {
              changeTime(formatString: "MMMM DD, YYYY")
              publicURL
              prettySize
              extension
            }
          }
        }
      }
    }
  }
`;
