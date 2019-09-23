import React from 'react';
import Img from 'gatsby-image';
import { Link, graphql } from 'gatsby';

import TrainingWrapper from '../components/training-wrapper';
import { uniq, flatten, includes } from '../utils/lodash';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import TRAINING_TOPICS from '../utils/training-topics';
import Section from '../primitives/section';
import Button from '../primitives/button';

import styles from './training.module.scss';

export default ({ data }) => {
  const topics = uniq(
    flatten(
      data.allMarkdownRemark.edges.map(edge => edge.node.frontmatter.topics),
    ),
  );

  return (
    <TrainingWrapper
      header={
        <FlexContainer direction="column" align="center">
          <TitleSection header="How Can We Help?" width="small">
            <p>
              Welcome to the LifeLoop Learning Community, built especially for
              staff members! LifeLoop makes it easy for staff to manage a
              community. However, we understand that with the many features, it
              is a learning process to properly utilize LifeLoop. This page is
              dedicated to easing your learning experience and getting
              comfortable with using LifeLoop.
            </p>
            <Link to="/training/getting-started">
              <Button>New to LifeLoop? Start Here</Button>
            </Link>
          </TitleSection>
        </FlexContainer>
      }
    >
      <Section width="medium">
        <h2 className={styles.topicHeader}>Browse by Topic</h2>
        <FlexContainer flex="1" wrap>
          {TRAINING_TOPICS.filter(({ key }) => includes(topics, key)).map(
            ({ key, name, image }) => (
              <Link key={key} to={`/training/${key}`} className={styles.topic}>
                <Img fluid={data[image].childImageSharp.fluid} />
                <span>{name}</span>
              </Link>
            ),
          )}
        </FlexContainer>
      </Section>
    </TrainingWrapper>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/training/" } } }) {
      edges {
        node {
          frontmatter {
            topics
          }
        }
      }
    }
    ...trainingImages
  }
`;
