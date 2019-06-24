import React from 'react';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';

import styles from './testimonials.module.scss';

const TestimonialCard = ({ isTablet, logo, quote, author, position }) => (
  <FlexContainer
    className={classNames(styles.communityColumn, {
      [styles.communityColumnVertical]: isTablet,
    })}
    direction="column"
    flex="1"
  >
    <div className={styles.communityLogo}>
      <Img fixed={logo} />
    </div>
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

export default function Testimonials({ testimonials }) {
  const { isTablet } = useDevice();
  return (
    <>
      <TitleSection header="Join communities across the United States & Canada who are creating a better connection.">
        <p>
          Our product is proven to provide results that can benefit clients both
          large and small. With LifeLoop, you will gain an experienced partner
          who can help you achieve your desired outcomes, create efficiencies
          and set your community apart.
        </p>
      </TitleSection>
      <Section centered noTopPadding>
        <FlexContainer direction={isTablet ? 'column' : 'row'}>
          {testimonials.map(testimonial => (
            <TestimonialCard
              key={testimonial.author}
              isTablet={isTablet}
              {...testimonial}
            />
          ))}
        </FlexContainer>
      </Section>
    </>
  );
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(
    PropTypes.shape({
      logo: PropTypes.shape().isRequired,
      quote: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
