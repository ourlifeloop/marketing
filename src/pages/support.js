import React from 'react';
import { Link } from 'gatsby';

import { useDevice } from '../utils/effects';
import ContactSidebar from '../components/contact-sidebar';
import FlexContainer from '../primitives/flex-container';
import Layout from '../primitives/layout';
import Section from '../primitives/section';
import SiteWrapper from '../components/site-wrapper';
import zohoPlugin from '../assets/ourlifeloop_zohodesk_embed.html';

export default function Support() {
  const { isTablet } = useDevice();

  return (
    <SiteWrapper title="Support | LifeLoop assisted living community management software">
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <div dangerouslySetInnerHTML={{ __html: zohoPlugin }} />
            <ContactSidebar
              links={[
                <Link key="contact" to="/contact">
                  Would you like to send us a message?
                </Link>,
                <Link key="recommend" to="/recommend">
                  Are you a family member?
                </Link>,
                <Link key="demo" to="/demo">
                  Would you like to schedule a demo?
                </Link>,
              ]}
            />
          </FlexContainer>
        </Section>
      </Layout>
    </SiteWrapper>
  );
}
