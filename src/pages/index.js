import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import classNames from 'classnames';
import ResponsiveEmbed from 'react-responsive-embed';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import DemoSection from '../components/demo-section';
import SiteWrapper from '../components/site-wrapper';
import HeroImage from '../primitives/hero-image';
import Section from '../primitives/section';
import Button from '../primitives/button';

import { useDevice } from '../utils/effects';

import styles from './index.module.scss';

export default ({ data }) => {
  const { isMini, isMobile, isTablet } = useDevice();

  return (
    <SiteWrapper transparent>
      <HeroImage
        height="600px"
        objectPosition="30% center"
        image={data.hero.childImageSharp.fluid}
        title="Enhancing Resident & Family Engagement Through Technology"
        description="Adapting technology solutions in a way to enhance the lives of
          resident and the staff members and family who care for them. LifeLoop
          is your full-service senior living solution."
      />
      <TitleSection header="A higher level of connection.">
        <p>
          We believe that quality community life extends far beyond the physical
          walls of your facility. We believe that adapting technology solutions
          can enhance the lives of your residents, their families and the staff
          who care for them. We believe that we can help you tell the story of
          your community with our custom-made senior living solutions.
        </p>
        <p>
          LifeLoop was founded based on the need to better communicate and
          engage family members of senior living communities. Today, we are a
          multi-faceted platform designed to streamline operations, work flow,
          and communication with your internal and external stakeholders.
        </p>
      </TitleSection>
      <TitleSection header="Join more than 100 communities who are creating a better connection.">
        <p>
          Our product is proven to provide results that can benefit clients both
          large and small. With LifeLoop, you will gain an experienced partner
          who can help you achieve your desired outcomes, create efficiencies
          and set your community apart.
        </p>
      </TitleSection>
      <Section centered noTopPadding>
        <FlexContainer direction={isTablet ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(styles.communityColumn, {
              [styles.communityColumnVertical]: isTablet,
            })}
            direction="column"
            flex="1"
          >
            <div className={styles.communityLogo}>
              <Img fixed={data.cascadia.childImageSharp.fixed} />
            </div>
            <p>
              <i>
                "LifeLoop’s valuable to us because the present and the future of
                our industry is to keep family members more and more involved in
                our residents’ lives. Family members are naturally curious about
                what’s going on with their loved ones, and LifeLoop is both a
                proactive and reactive way of helping with that."
              </i>
            </p>
            <p>
              <b className={styles.quoteAuthor}>Thomas Cloutier</b>
              <br />
              <i className={styles.authorPosition}>
                Vice President of Operations
              </i>
            </p>
          </FlexContainer>
          <FlexContainer
            className={classNames(styles.communityColumn, {
              [styles.communityColumnVertical]: isTablet,
            })}
            direction="column"
            flex="1"
          >
            <div className={styles.communityLogo}>
              <Img fixed={data.fieldstone.childImageSharp.fixed} />
            </div>
            <p>
              <i>
                "I have worked with Life Loop since its beginnings and I
                continue to be impressed with the continued growth and
                improvement of the product. Our families enjoy the information
                and photos they get daily, a kind of a window into their loved
                one’s day, and our staff relies on the communication and
                attendance tracking."
              </i>
            </p>
            <p>
              <b className={styles.quoteAuthor}>Lucie Flood</b>
              <br />
              <i className={styles.authorPosition}>Life Enrichment Director</i>
            </p>
          </FlexContainer>
          <FlexContainer
            className={classNames(styles.communityColumn, {
              [styles.communityColumnVertical]: isTablet,
            })}
            direction="column"
            flex="1"
          >
            <div className={styles.communityLogo}>
              <Img fixed={data.dial.childImageSharp.fixed} />
            </div>
            <p>
              <i>
                "In this industry, employee turnover is common, unfortunately,
                and it can be very difficult to bring new staff up to speed. An
                easy system like this really helps. And it can even help build a
                consistent company culture, even as staff rotates."
              </i>
            </p>
            <p>
              <b className={styles.quoteAuthor}>Lisa Moes</b>
            </p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <Section noTopPadding width="medium">
        <FlexContainer
          direction={isMini ? 'column' : 'row'}
          className={styles.actionView}
          align="center"
        >
          <FlexContainer className={styles.actionViewText} direction="column">
            <h3>See LifeLoop in action.</h3>
            <p>
              The demo is customized around you. Get answers to your unique
              questions and find out why LifeLoop is the right choice for your
              community.
            </p>
          </FlexContainer>
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        </FlexContainer>
      </Section>
      <TitleSection header="Solutions custom-made for your senior living community.">
        <p>
          LifeLoop has tools for today's communities. LifeLoop can help
          residents thrive with tools for management, scheduling, data tracking
          and more!
        </p>
      </TitleSection>
      <Section centered noTopPadding>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            align="center"
          >
            <ResponsiveEmbed
              src="https://www.youtube-nocookie.com/embed/JW5KkDSdt8w"
              // ratio="4:3"
              allowFullScreen
            />
            <p>Connecting Management & Staff</p>
          </FlexContainer>
          <FlexContainer
            className={classNames(styles.videoContainer, {
              [styles.videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
            align="center"
          >
            <ResponsiveEmbed
              src="https://www.youtube-nocookie.com/embed/DucvjjOT0bs"
              // ratio="4:3"
              allowFullScreen
            />
            <p>Connecting Residents & Family</p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <DemoSection />
    </SiteWrapper>
  );
};

export const query = graphql`
  query {
    hero: file(relativePath: { eq: "home-hero.png" }) {
      childImageSharp {
        fluid(maxWidth: 1100, toFormat: JPG) {
          ...GatsbyImageSharpFluid
          presentationWidth
        }
      }
    }
    cascadia: file(relativePath: { eq: "cascadia-logo.png" }) {
      childImageSharp {
        fixed(width: 220, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    dial: file(relativePath: { eq: "dial-logo.png" }) {
      childImageSharp {
        fixed(width: 150, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fieldstone: file(relativePath: { eq: "fieldstone-logo.png" }) {
      childImageSharp {
        fixed(width: 280, toFormat: JPG) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;
