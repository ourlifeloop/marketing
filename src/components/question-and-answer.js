import React, { useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import FlexContainer from '../primitives/flex-container';
import { ChevronDown } from '../utils/icons';

import {
  container,
  containerOpen,
  innerContainer,
  icon,
} from './question-and-answer.module.scss';

const QnaItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FlexContainer
      key={question}
      direction="column"
      align="flexstart"
      onClick={() => setIsOpen(!isOpen)}
      className={classNames(container, {
        [containerOpen]: isOpen,
      })}
    >
      <FlexContainer
        align="center"
        justify="spacebetween"
        className={innerContainer}
      >
        <div className={question}>Q: {question}</div>
        <ChevronDown className={icon} size={30} />
      </FlexContainer>
      {isOpen && <p className={answer}>{answer}</p>}
    </FlexContainer>
  );
};

export default function QuestionAndAnswer({ questions, ...rest }) {
  return (
    <FlexContainer direction="column" {...rest}>
      {questions.map(QnaItem)}
    </FlexContainer>
  );
}

QuestionAndAnswer.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answer: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
