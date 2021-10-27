import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import ActionCallout from '../../primitives/action-callout';
import FlexContainer from '../../primitives/flex-container';
import TitleSection from '../../primitives/title.section';
import { removeTrailingSlash } from '../../utils/common';
import Testimonials from '../../components/testimonials';
import SiteWrapper from '../../components/site-wrapper';
import DemoSection from '../../components/demo-section';
import BlogSection from '../../components/blog-section';
import HeroImage from '../../primitives/hero-image';
import { useDevice } from '../../utils/effects';
import Section from '../../primitives/section';
import Button from '../../primitives/button';

import {
  emphasized,
  videoContainer,
  videoContainerVertical,
  videoImage,
  videoHeader,
} from './solutions.module.scss';

export default function SpecializedServiceSolution({ data, location }) {
  const { isMobile } = useDevice();

  return (
    <SiteWrapper title="Keeping family, residents and staff connected and engaged | LifeLoop">
      <HeroImage
        isDark
        direction="right"
        height={isMobile ? '400px' : '500px'}
        objectPosition="50% 40%"
        image={getImage(data.hero)}
        title="Partnerships we believe in"
        description=" LifeLoop isn’t a “one size fits all” platform. We have found over the years that our platform can benefit companies of all types, big and small. "
      />
      <TitleSection header="Generating Connection">
        <p>
          At LifeLoop we have always believed in one core idea: connection is
          vital. Enhancing resident connection to their families and to the
          world around them is why LifeLoop was born. And we have found that
          working with companies who share that same passion for connection is
          the foundation for a great partnership.
        </p>
        <p className={emphasized}>
          Being “in the loop” means always having the latest information at your
          fingertips.
        </p>
      </TitleSection>
      <Section>
        <FlexContainer direction={isMobile ? 'column' : 'row'}>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
          >
            <FlexContainer className={videoImage}>
              <GatsbyImage
                image={getImage(data.crcc)}
                alt="Children’s Respite Care Center Omaha"
              />
            </FlexContainer>
            <h2 className={videoHeader}>
              Children’s Respite Care Center Omaha
            </h2>
            <p>
              Children’s Respite Care Center (CRCC) currently serves nearly 600
              children from birth through 21 years of age with medically fragile
              conditions, developmental delays, and other physical challenges.
              Some of these medical needs include cerebral palsy, down syndrome,
              feeding disorders (tube feedings), seizure disorders and brain
              injuries. Children with behavioral disorders and mental health
              concerns are also served in specially designed programs.
            </p>
            <p>
              At CRCC, several staff members utilize LifeLoop on a daily basis
              including teachers, therapists, nurses, and leadership. While CRCC
              uses several areas of the LifeLoop platform, some of their most
              used features include the calendar, our communication platform,
              digital signage and the family portal.
            </p>
            <p>
              To learn more about how LifeLoop works for CRCC,{' '}
              <Link to="/blog/lifeloop-customer-spotlight-childrens-respite-care-center">
                view our blog.
              </Link>
            </p>
          </FlexContainer>
          <FlexContainer
            className={classNames(videoContainer, {
              [videoContainerVertical]: isMobile,
            })}
            flex="1"
            direction="column"
          >
            <FlexContainer className={videoImage}>
              <GatsbyImage
                image={getImage(data.elaine)}
                alt="Elaine: Transportation for the Homeless"
              />
            </FlexContainer>
            <h2 className={videoHeader}>
              Elaine: Transportation for the Homeless
            </h2>
            <p>
              The team at Elaine provides transportation services and healthcare
              access to individuals experiencing homelessness in the Phoenix and
              Scottsdale areas. With the goal of eliminating barriers around the
              social determinants of health, Elaine works tirelessly to connect
              this population to the critical resources that they need that
              aren’t covered by insurance.
            </p>
            <p>
              Elaine utilizes the LifeLoop transportation features to schedule
              and organize rides for their clients on a day-to-day basis. The
              drivers are able to log in to LifeLoop via their tablets or mobile
              phones and organize their days based on their clients’ needs.
            </p>
            <p>
              To learn more about how LifeLoop works for Elaine,{' '}
              <Link to="/blog/customer-spotlight-elaine">view our blog.</Link>
            </p>
          </FlexContainer>
        </FlexContainer>
      </Section>
      <ActionCallout
        title="See LifeLoop in action."
        body="The demo is customized around you. Get answers to your unique questions and find out why LifeLoop is the right choice for your community."
        button={
          <Link to="/demo">
            <Button>Request a Demo</Button>
          </Link>
        }
      />
      <Testimonials pathname={removeTrailingSlash(location.pathname)} />
      <BlogSection posts={data.blogs} />
      <DemoSection />
    </SiteWrapper>
  );
}

SpecializedServiceSolution.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const query = graphql`
  {
    hero: file(relativePath: { eq: "ss-hero.png" }) {
      childImageSharp {
        gatsbyImageData(layout: CONSTRAINED, quality: 80)
      }
    }
    crcc: file(relativePath: { eq: "ss-crcc.png" }) {
      childImageSharp {
        gatsbyImageData(
          width: 623
          height: 400
          layout: CONSTRAINED
          quality: 80
        )
      }
    }
    elaine: file(relativePath: { eq: "ss-elaine.jpeg" }) {
      childImageSharp {
        gatsbyImageData(
          width: 623
          height: 400
          layout: CONSTRAINED
          quality: 80
        )
      }
    }
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          title: {
            in: [
              "LifeLoop Customer Spotlight: Children's Respite Care Center"
              "Customer Spotlight: Elaine"
            ]
          }
        }
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          fields {
            slug
          }
          frontmatter {
            title
            photo {
              childImageSharp {
                gatsbyImageData(width: 500, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
