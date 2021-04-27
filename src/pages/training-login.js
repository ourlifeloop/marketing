import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage } from 'gatsby-plugin-image';

import FlexContainer from '../primitives/flex-container';
import Button from '../primitives/button';
import Input from '../primitives/input';

import { useTrainingAuth } from '../utils/effects';
import { Lock } from '../utils/icons';

import {
  container,
  inner,
  lock,
  lockContainer,
  logo,
  input,
} from './training-login.module.scss';

export default function TrainingLogin({ data }) {
  const [pass, setPass] = useState('');
  const [isError, setIsError] = useState(false);
  const onSubmitPassword = useTrainingAuth();

  return (
    <div className={container}>
      <FlexContainer
        className={inner}
        direction="column"
        align="center"
        justify="center"
      >
        <div className={lockContainer}>
          <Lock size={20} className={lock} />
        </div>

        <GatsbyImage
          image={data.logo.childImageSharp.gatsbyImageData}
          className={logo}
        />

        <Input
          value={pass}
          type="password"
          isError={isError}
          onChange={e => setPass(e.target.value)}
          className={input}
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
}

export const query = graphql`
  {
    logo: file(relativePath: { eq: "lifeloop-logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 250, placeholder: NONE, layout: FIXED)
      }
    }
  }
`;
