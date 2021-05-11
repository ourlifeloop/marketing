import React from 'react';
import PropTypes from 'prop-types';

import TitleSection from '../../primitives/title.section';
import Section from '../../primitives/section';
import Button from '../../primitives/button';

import {
  container,
  subHeading,
  list,
  listItem,
  apply,
} from './styles.module.scss';
import FlexContainer from '../../primitives/flex-container';

export default function CareerPost({
  title,
  date,
  html,
  responsibilities,
  careerEmail,
}) {
  const emailConfig = `subject=${encodeURIComponent(
    `${title} Application`,
  )}&body=${encodeURIComponent(
    'Full Name:\nPhone:\n\n(Please Attach Resume)',
  )}`;
  console.log(emailConfig);
  return (
    <>
      <Section width="small">
        <div className={container}>
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
        {html}
        <h3 className={subHeading}>Responsibilities</h3>
        <ul className={list}>
          {responsibilities.map((responsibility) => (
            <li className={listItem} key={responsibility}>
              {responsibility}
            </li>
          ))}
        </ul>
        <FlexContainer className={apply} align="center" justify="center">
          <a href={`mailto:${careerEmail}?${emailConfig}`}>
            <Button>Apply Now</Button>
          </a>
        </FlexContainer>
      </Section>
      <TitleSection secondary header="Got Questions? We have answers!">
        <p>
          We're always looking for talented pros to join our team, so if this
          sounds like the place for you, we want to talk.
        </p>
        <a href={`mailto:${careerEmail}`}>{careerEmail}</a>
      </TitleSection>
    </>
  );
}

CareerPost.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  html: PropTypes.node.isRequired,
  responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  careerEmail: PropTypes.string.isRequired,
};
