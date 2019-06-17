import React, { useState } from 'react';
import classNames from 'classnames';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import { ChevronDown } from '../utils/icons';

import styles from './question-and-answer.module.scss';

const qnaItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <FlexContainer
      key={question}
      direction="column"
      align="flexstart"
      onClick={() => setIsOpen(!isOpen)}
      className={classNames(styles.container, {
        [styles.containerOpen]: isOpen,
      })}
    >
      <FlexContainer
        align="center"
        justify="spacebetween"
        className={styles.innerContainer}
      >
        <div className={styles.question}>Q: {question}</div>
        <ChevronDown className={styles.icon} size={30} />
      </FlexContainer>
      {isOpen && <p className={styles.answer}>{answer}</p>}
    </FlexContainer>
  );
};

export default function QuestionAndAnswer({ questions }) {
  return (
    <TitleSection header="Explore how LifeLoop can help connect your community.">
      {questions.map(qnaItem)}
    </TitleSection>
  );
}
