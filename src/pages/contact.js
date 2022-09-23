import React from 'react';
import { Link } from 'gatsby';

import ContactSidebar from '../components/contact-sidebar';
import FlexContainer from '../primitives/flex-container';
import FormContainer from '../primitives/form-container';
import SiteWrapper from '../components/site-wrapper';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../primitives/layout';
import HubspotFormRenderer from '../components/hubspot.form.renderer';

export default function Contact() {
  const { isTablet } = useDevice();

  return (
    <SiteWrapper title="Contact Us | LifeLoop assisted living community management software">
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <FormContainer>
              <h1>General Contact</h1>
              <p>
                We love to talk about our product. Go ahead and start the
                conversation.
              </p>
              <HubspotFormRenderer
                id="contact-form"
                region="na1"
                portalId="8341689"
                formId="5fff7408-6fc1-4070-ad4d-5a6716754d11"
                version="V2_PRERELEASE"
              />
            </FormContainer>
            <ContactSidebar
              links={[
                <Link key="contact" to="/demo">
                  Would you like to schedule a demo?
                </Link>,
                <Link key="recommend" to="/recommend">
                  Are you a family member?
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
