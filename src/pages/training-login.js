import React, { useState } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import Input from '../primitives/input';

import { useTrainingAuth } from '../utils/effects';
import { Lock } from '../utils/icons';

import styles from './training-login.module.scss';

export default ({ data }) => {
  const [pass, setPass] = useState('');
  const [isError, setIsError] = useState(false);
  const onSubmitPassword = useTrainingAuth();

  return (
    <div className={styles.container}>
      <FlexContainer
        className={styles.inner}
        direction="column"
        align="center"
        justify="center"
      >
        <div className={styles.lockContainer}>
          <Lock size={20} className={styles.lock} />
        </div>

        <Img fixed={data.logo.childImageSharp.fixed} className={styles.logo} />

        <Input
          value={pass}
          type="password"
          isError={isError}
          onChange={e => setPass(e.target.value)}
          className={styles.input}
          placeholder="Password"
          autoFocus // eslint-disable-line jsx-a11y/no-autofocus
        />

        <Button
          disabled={!pass}
          type="submit"
          onClick={() => {
            setIsError(true);
            onSubmitPassword(pass);
          }}
        >
          Submit
        </Button>
      </FlexContainer>
    </div>
  );
};

export const query = graphql`
  query {
    logo: file(relativePath: { eq: "lifeloop-logo.png" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`;
