import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Img from 'gatsby-image/withIEPolyfill';
import { useStaticQuery, graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import '../utils/navigation';

import styles from './testimonials.module.scss';

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
    className={classNames(styles.communityColumn, className, {
      [styles.communityColumnVertical]: isTablet,
    })}
  >
    <FlexContainer align="flexend" className={styles.logoContainer}>
      <div className={styles.communityLogo}>
        <Img fluid={logo} className={styles.communityImg} objectFit="contain" />
      </div>
    </FlexContainer>
    <p>
      <i>"{quote}"</i>
    </p>
    <p>
      <b className={styles.quoteAuthor}>{author}</b>
      <br />
      <i className={styles.authorPosition}>{position}</i>
    </p>
  </FlexContainer>
);

export default function Testimonials({ hideTitle, testimonials }) {
  const { isTablet } = useDevice();
  const images = useStaticQuery(
    graphql`
      query {
        ...testimonialImages
      }
    `,
  );

  if (testimonials.length < 2 || testimonials.length > 3) {
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
        width={testimonials.length < 3 ? 'medium' : 'large'}
      >
        <FlexContainer direction={isTablet ? 'column' : 'row'}>
          {testimonials.map(testimonial => (
            <TestimonialCard
              className={testimonials.length < 3 ? styles.half : styles.third}
              key={testimonial.author}
              isTablet={isTablet}
              {...testimonial}
              logo={images[testimonial.logo].childImageSharp.fluid}
            />
          ))}
        </FlexContainer>
      </Section>
    </>
  );
}

Testimonials.propTypes = {
  hideTitle: PropTypes.bool,
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.string.isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

Testimonials.defaultProps = {
  hideTitle: false,
};
