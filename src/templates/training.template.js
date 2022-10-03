import React from 'react';
import { graphql } from 'gatsby';

import UserTraining from '../components/user-training';
import { uniq, flatten } from '../utils/lodash';

export default function TrainingTemplate({ data, pageContext }) {
  const faqs = data.faqs.edges.map(({ node }) => node.frontmatter);
  const topics = uniq(
    flatten(data.topics.edges.map(({ node }) => node.frontmatter.topics)),
  );

  return (
    <UserTraining userType={pageContext.userType} topics={topics} faqs={faqs} />
  );
}

export const query = graphql`
  query($userType: String!) {
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
    faqs: allMarkdownRemark(
      filter: {
        fields: { slug: { regex: "^/training/" } }
        frontmatter: {
          userTypes: { eq: $userType }
          topics: { eq: "main-page" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            question
            answer
          }
        }
      }
    }
  }
`;
