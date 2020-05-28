import React from 'react';
import Img from 'gatsby-image';
import { graphql } from 'gatsby';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import Testimonials from '../components/testimonials';
import SiteWrapper from '../components/site-wrapper';
import BlogSection from '../components/blog-section';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Button from '../primitives/button';
import { Download } from '../utils/icons';

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
      <Testimonials
        hideTitle
        testimonials={[
          {
            logo: 'balfour',
            quote:
              'LifeLoop solves so many of the problems you have when you’re reaching a huge number of residents and family members all at once,” Louise says. “It keeps us all connected, in a way that’s scalable and transparent.',
            author: 'Louise Garrels',
            position: 'Director of Marketing & Communications',
          },
          {
            logo: 'lifeloop',
            quote:
              'I just wanted to say thank you for LifeLoop. During this frightening, isolating COVID-19 outbreak LifeLoop has been a lifeline. I have been able to keep in touch with my dad who is in memory care.  Without LifeLoop, I would feel helpless. Thank you!',
            author: 'Meg Hentges',
            position: 'Family Member',
          },
          {
            logo: 'jacksonCreek',
            quote:
              "I'm not sure how we'd be getting through this time without LifeLoop! We have increased our family connections, probably doubled in the past week. Freeing up staff and creating crucial time for us to serve residents, rather than being on the phone calling families.",
            author: 'Melida Sukle',
            position: 'Life Enrichment Director',
          },
        ]}
      />
      <ActionCallout
        noTopPadding
        title="Resident Engagement Resources"
        body="Our goal is to help provide you with resources and information that can benefit your residents during this unprecendented time. Below you will find a variety of activities to keep residents engaged both mentally and physically."
        button={
          <a
            href={data.allResources.publicURL}
            download={`${data.allResources.name}${data.allResources.ext}`}
          >
            <Button>Download All</Button>
          </a>
        }
      />
      <TitleSection header="Resident Resource Files" noTopPadding>
        <FlexContainer direction="column">
          {data.resources.edges.map(({ node }) => (
            <a
              key={node.name}
              href={node.publicURL}
              download={`${node.name}${node.ext}`}
            >
              <FlexContainer
                align="center"
                justify="spacebetween"
                className={styles.resource}
              >
                <div className={styles.question}>
                  {node.extension.toUpperCase()}: {node.name}
                </div>
                <Download className={styles.download} size={30} />
              </FlexContainer>
            </a>
          ))}
        </FlexContainer>
      </TitleSection>
      <BlogSection posts={data.blogs} header="COVID-19 Blogs & Features" />
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
    resources: allFile(
      sort: { fields: [ext, name] }
      filter: {
        sourceInstanceName: { eq: "files" }
        extension: { in: ["pdf", "docx"] }
      }
    ) {
      edges {
        node {
          publicURL
          extension
          name
          ext
        }
      }
    }
    allResources: file(relativePath: { eq: "resident-resources.zip" }) {
      publicURL
      name
      ext
    }
    blogs: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          title: {
            in: [
              "COVID-19: LifeLoop Best Practices for Keeping your Residents, Staff Members and Families Informed"
              "LifeLoop featured on MarketWatch: How senior centers are keeping residents happy as they try to protect them from COVID-19"
              "Communication Technology Gives Communities More Time For Residents - Podcast featuring LifeLoop VP Nick Nemer"
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
                fluid(maxWidth: 500) {
                  ...GatsbyImageSharpFluid
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
