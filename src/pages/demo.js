import React from 'react';
import { Link, graphql } from 'gatsby';

import ContactSidebar from '../components/contact-sidebar';
import FlexContainer from '../primitives/flex-container';
import FormContainer from '../primitives/form-container';
import SiteWrapper from '../components/site-wrapper';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../primitives/layout';
import HubspotFormRenderer from '../primitives/hubspot.form.renderer';

export default function Demo({ data }) {
  const { isTablet } = useDevice();

  return (
    <SiteWrapper title="Request a Demo | LifeLoop assisted living community management software">
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <FormContainer>
              <h1>Request a Demo</h1>
              <p>
                See what LifeLoop can do for you. Fill out the form below or
                give us a call at{' '}
                <a href={`tel:${data.site.siteMetadata.phoneNumber}`}>
                  {data.site.siteMetadata.phoneNumber}
                </a>
                .
              </p>
              <HubspotFormRenderer
                id="demo-form"
                region="na1"
                portalId="8341689"
                formId="5fff7408-6fc1-4070-ad4d-5a6716754d11"
                version="V2_PRERELEASE"
              />
            </FormContainer>
            <ContactSidebar
              links={[
                <Link key="recommend" to="/recommend">
                  Are you a family member?
                </Link>,
                <Link key="contact" to="/contact">
                  Would you like to send us a message?
                </Link>,
                <Link key="support" to="/support">
                  Do you need technical support?
                </Link>,
              ]}
            />
          </FlexContainer>
        </Section>
      </Layout>
    </SiteWrapper>
  );
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        phoneNumber
      }
    }
  }
`;
