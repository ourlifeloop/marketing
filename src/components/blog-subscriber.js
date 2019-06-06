import React, { useState } from 'react';
import { navigate } from 'gatsby';
import 'whatwg-fetch';

import FlexContainer from '../primitives/flex-container';
import TitleSection from '../primitives/title.section';
import Button from '../primitives/button';
import { subscribe } from '../utils/api';
import Input from '../primitives/input';

import styles from './blog-subscriber.module.scss';

export default () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();

  const onSubscribe = () =>
    subscribe(email)
      .then(() => navigate('/form-success'))
      .catch(error => {
        console.log(error);
        setError('An error has occured.');
      });

  return (
    <TitleSection secondary header="Stay in the Loop.">
      <p>
        Designed with you in mind, 'In The Loop’ is a blog offering industry
        insights, news, and ideas straight to your inbox. Each month we will
        share industry topics and provide tips on best practices for connecting
        with families, engaging with residents and streamlining operations.
      </p>
      <FlexContainer justify="center">
        <Input
          className={styles.input}
          placeholder="Enter your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <Button onClick={onSubscribe}>Subscribe</Button>
      </FlexContainer>
      {!!error && <div className={styles.error}>{error}</div>}
    </TitleSection>
  );
};
