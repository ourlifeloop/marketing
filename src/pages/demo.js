import React from 'react';
import { graphql } from 'gatsby';

import FlexContainer from '../primitives/flex-container';
import SiteWrapper from '../components/site-wrapper';
import FormRow from '../primitives/form-row';
import Section from '../primitives/section';
import Layout from '../primitives/layout';
import Label from '../primitives/label';
import Input from '../primitives/input';

import styles from './demo.module.scss';

export default ({ data }) => (
  <SiteWrapper>
    <Layout>
      <Section>
        <FlexContainer>
          <FlexContainer direction="column" className={styles.formContainer}>
            <h1>Request a Demo</h1>
            <p>
              See what LifeLoop can do for you. Fill out the form below or give
              us a call at{' '}
              <a href={`tel:${data.site.siteMetadata.phoneNumber}`}>
                {data.site.siteMetadata.phoneNumber}
              </a>
              .
            </p>
            <form onSubmit={() => {}}>
              <FormRow>
                <Label htmlFor="firstName" title="First Name">
                  <Input />
                </Label>
                <Label htmlFor="lastName" title="Last Name">
                  <Input />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="company" title="Company Name">
                  <Input />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="email" title="Email">
                  <Input />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="phone" title="Phone">
                  <Input />
                </Label>
                <Label htmlFor="state" title="State">
                  <Input />
                </Label>
              </FormRow>
            </form>
          </FlexContainer>
        </FlexContainer>
      </Section>
    </Layout>
  </SiteWrapper>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        phoneNumber
      }
    }
  }
`;
