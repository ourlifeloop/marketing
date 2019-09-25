import React from 'react';
import { graphql } from 'gatsby';

import UserTraining from '../components/user-training';
import { uniq, flatten } from '../utils/lodash';

export default ({ data, pageContext }) => {
  const topics = uniq(
    flatten(
      data.allMarkdownRemark.edges.map(({ node }) => node.frontmatter.topics),
    ),
  );

  return <UserTraining userType={pageContext.userType} topics={topics} />;
};

export const query = graphql`
  query($userType: String!) {
    allMarkdownRemark(
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
  }
`;
