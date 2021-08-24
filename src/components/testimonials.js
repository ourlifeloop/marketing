import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';

import { includes, shuffle, take } from '../utils/lodash';
import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';

import {
  communityColumn,
  communityColumnVertical,
  logoContainer,
  communityLogo,
  communityImg,
  quoteAuthor,
  authorPosition,
  half,
  third,
} from './testimonials.module.scss';

const TestimonialCard = ({
  className,
  isTablet,
  logo,
  quote,
  author,
  position,
}) => (
  <FlexContainer
    direction="column"
    className={classNames(communityColumn, className, {
      [communityColumnVertical]: isTablet,
    })}
  >
    <FlexContainer align="flexend" className={logoContainer}>
      <div className={communityLogo}>
        <GatsbyImage
          alt={author}
          image={logo}
          className={communityImg}
          objectFit="contain"
        />
      </div>
    </FlexContainer>
    <p>
      <i>"{quote}"</i>
    </p>
    <p>
      <b className={quoteAuthor}>{author}</b>
      <br />
      <i className={authorPosition}>{position}</i>
    </p>
  </FlexContainer>
);

export default function Testimonials({ hideTitle, pathname }) {
  const { isTablet } = useDevice();
  const testimonials = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: { fields: { slug: { regex: "^/testimonials/" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                author
                quote
                position
                pages
                logo {
                  childImageSharp {
                    gatsbyImageData(
                      height: 130
                      layout: CONSTRAINED
                      quality: 100
                    )
                  }
                }
              }
            }
          }
        }
      }
    `,
  );

  const filteredTestimonials = shuffle(testimonials.allMarkdownRemark.edges)
    .map(({ node }) => ({ key: node.id, ...node.frontmatter }))
    .filter(({ pages }) => includes(pages, pathname));

  if (filteredTestimonials.length < 2) {
    return null;
  }

  return (
    <>
      {!hideTitle && (
        <TitleSection header="Join communities across the United States & Canada who are creating a better connection.">
          <p>
            Our product is proven to provide results that can benefit clients
            both large and small. With LifeLoop, you will gain an experienced
            partner who can help you achieve your desired outcomes, create
            efficiencies and set your community apart.
          </p>
        </TitleSection>
      )}
      <Section
        centered
        noTopPadding
        width={filteredTestimonials.length < 3 ? 'medium' : 'large'}
      >
        <FlexContainer direction={isTablet ? 'column' : 'row'}>
          {take(filteredTestimonials, 3).map((testimonial) => (
            <TestimonialCard
              className={filteredTestimonials.length < 3 ? half : third}
              key={testimonial.key}
              isTablet={isTablet}
              {...testimonial}
              logo={getImage(testimonial.logo)}
            />
          ))}
        </FlexContainer>
      </Section>
    </>
  );
}

Testimonials.propTypes = {
  pathname: PropTypes.string.isRequired,
  hideTitle: PropTypes.bool,
};

Testimonials.defaultProps = {
  hideTitle: false,
};
