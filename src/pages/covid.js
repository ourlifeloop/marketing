import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import SiteWrapper from '../components/site-wrapper';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';

import styles from './covid.module.scss';

export default ({ data }) => {
  const { isMobile } = useDevice();

  return (
    <SiteWrapper>
      <Section>
        <FlexContainer direction="column" align="center">
          <h1 className={styles.title}>COVID-19</h1>
          <h2>our commitment to you</h2>
        </FlexContainer>
        <FlexContainer
          className={styles.letter}
          direction={isMobile ? 'columnreverse' : 'row'}
          align={isMobile ? 'center' : 'flexstart'}
        >
          <Img
            className={classNames(styles.amy, {
              [styles.amyMinimized]: isMobile,
            })}
            fixed={data.amy.childImageSharp.fixed}
          />
          <FlexContainer flex="1" direction="column">
            <p>Dear Clients, Residents & Family Members -</p>
            <p>
              As our nation and our world navigate uncertainty in these unique
              times, we want you to know we stand with you. We understand the
              unforeseen challenges you face and are here to help you support
              your community, your residents, and their families.
            </p>
            <p>
              We realize that your mission is to look after and care for a
              generation of people who are most susceptible to this virus. We
              also honor your heroic commitment to keeping your staff members
              safe and healthy.
            </p>
            <p>
              This letter is to let you know that we are working hard to make
              sure that all of our clients feel they have the best tools at
              their disposal to keep residents engaged and keep families
              informed. LifeLoop was founded in 2015 based on the immense need
              for more communication between communities, residents and family
              members and that continues to be our guiding light today.
            </p>
            <p>
              Our Customer Support team is available to lend a hand and be there
              for you with solutions and answers to help you through this. As
              always, we are committed to providing you with outstanding support
              and service, in a transparent manner you can trust. We promise to
              continually evolve our platform to meet the ever-changing needs of
              senior living communities everywhere.
            </p>
            <p>
              Thank you for trusting in us. We will get through this and be
              stronger because of it.
            </p>
            <p>Sincerely,</p>
            <b>Amy Johnson</b>
            <p>Co-Founder & CEO, LifeLoop</p>
          </FlexContainer>
        </FlexContainer>
      </Section>
    </SiteWrapper>
  );
};

export const query = graphql`
  query {
    amy: file(relativePath: { eq: "team/amy.johnson.jpg" }) {
      childImageSharp {
        fixed(width: 400, height: 400, cropFocus: NORTH, quality: 90) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
