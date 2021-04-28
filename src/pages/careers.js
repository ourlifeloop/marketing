import React from 'react';
import { graphql } from 'gatsby';
import classNames from 'classnames';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

import FlexContainer from '../primitives/flex-container';
import ActionCallout from '../primitives/action-callout';
import TitleSection from '../primitives/title.section';
import SiteWrapper from '../components/site-wrapper';
import { ChevronRight } from '../utils/icons';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';

import {
  titleSection,
  titleText,
  sectionText,
  meetingImage,
  actionImage,
  actionImageTablet,
  actionImageMobile,
  weAre,
  weAreCollapsed,
  weAreWrapper,
  positionLink,
  openPosition,
  linkIcon,
} from './careers.module.scss';

const WHO_WE_ARE = [
  'Be Self-Aware',
  'Be Persistant',
  'Be Open-Minded',
  'Be Accountable',
  'Be Curious',
  'Be Empathetic',
  'Be a Friend',
  'Be a Team Player',
  'Be Your Best',
];

export default function Careers({ data }) {
  const { isTablet, isMini } = useDevice();

  let imageBoard = [
    data.joeyInAction,
    data.dylanInAction,
    data.natalliaInAction,
    data.philLeviInAction,
    data.amyInAction,
    data.jtInAction,
  ].map(getImage);

  if (isMini) {
    imageBoard = imageBoard.filter((_, i) => i < 4);
  }

  return (
    <SiteWrapper title="Careers | LifeLoop assisted living community management software">
      <Section width="small" centered className={titleSection}>
        <h1 className={titleText}>Interested in joining the team?</h1>
      </Section>
      <FlexContainer>
        <GatsbyImage
          className={meetingImage}
          alt="LifeLoop Meeting"
          image={getImage(data.meeting)}
          objectPosition="50% 68%"
        />
      </FlexContainer>
      <Section width="small" centered>
        <div className={sectionText}>
          We are a group of people who constantly strive to improve our company,
          our product, our community, and ourselves. We believe that aging is
          something to be embraced, not feared. At LifeLoop, a collaborative
          process is the foundation of our success and our culture.
        </div>
      </Section>
      <FlexContainer wrap>
        {imageBoard.map((image, i) => (
          <GatsbyImage
            key={i}
            className={classNames(actionImage, {
              [actionImageTablet]: isTablet,
              [actionImageMobile]: isMini,
            })}
            alt={`LifeLoop in Action - ${i + 1}`}
            image={image}
          />
        ))}
      </FlexContainer>
      <ActionCallout
        title="Our core values drive everything we do."
        body="At LifeLoop, we live our values, and we also hire according to those values. Our best ideas happen when we demand the most of each other - and just as much of ourselves."
      />
      <Section secondary width="medium">
        <FlexContainer wrap className={weAreWrapper} justify="center">
          {WHO_WE_ARE.map(text => (
            <FlexContainer
              align="center"
              justify="center"
              className={classNames(weAre, { [weAreCollapsed]: isMini })}
              key={text}
            >
              {text}
            </FlexContainer>
          ))}
        </FlexContainer>
      </Section>
      {!!data.allMarkdownRemark.edges.length && (
        <TitleSection header="We're searching for talent.">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <a
              key={node.id}
              href={node.frontmatter.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={node.frontmatter.title}
              className={positionLink}
            >
              <FlexContainer
                align="center"
                justify="spacebetween"
                className={openPosition}
              >
                <span>{node.frontmatter.title}</span>
                <ChevronRight className={linkIcon} size={24} />
              </FlexContainer>
            </a>
          ))}
        </TitleSection>
      )}
      <TitleSection
        secondary={!!data.allMarkdownRemark.edges.length}
        header="Got Questions? We have answers!"
      >
        <p>
          We're always looking for talented pros to join our team, so if this
          sounds like the place for you, we want to talk.
        </p>
        <a href={`mailto:${data.site.siteMetadata.careers}`}>
          {data.site.siteMetadata.careers}
        </a>
      </TitleSection>
    </SiteWrapper>
  );
}

export const query = graphql`
  fragment actionImage on File {
    childImageSharp {
      gatsbyImageData(height: 300, quality: 80, layout: CONSTRAINED)
    }
  }

  query {
    site {
      siteMetadata {
        careers
      }
    }
    allMarkdownRemark(filter: { fields: { slug: { regex: "^/careers/" } } }) {
      edges {
        node {
          id
          frontmatter {
            link
            title
          }
        }
      }
    }
    meeting: file(relativePath: { eq: "meeting.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 1000, quality: 80, layout: CONSTRAINED)
      }
    }
    joeyInAction: file(relativePath: { eq: "joey-in-action.jpeg" }) {
      ...actionImage
    }
    dylanInAction: file(relativePath: { eq: "dylan-in-action.jpeg" }) {
      ...actionImage
    }
    natalliaInAction: file(relativePath: { eq: "natallia-in-action.jpeg" }) {
      ...actionImage
    }
    philLeviInAction: file(relativePath: { eq: "phil-levi-in-action.jpeg" }) {
      ...actionImage
    }
    amyInAction: file(relativePath: { eq: "amy-in-action.jpeg" }) {
      ...actionImage
    }
    jtInAction: file(relativePath: { eq: "jt-in-action.jpeg" }) {
      ...actionImage
    }
  }
`;
