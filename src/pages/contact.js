import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import ContactSidebar from '../components/contact-sidebar';
import FlexContainer from '../primitives/flex-container';
import FormContainer from '../primitives/form-container';
import SiteWrapper from '../components/site-wrapper';
import FormRow from '../primitives/form-row';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../primitives/layout';
import Button from '../primitives/button';
import { submitForm } from '../utils/api';
import Label from '../primitives/label';
import Input from '../primitives/input';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: '',
};

export default () => {
  const { isTablet } = useDevice();
  const [form, setForm] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const isValid =
    !!form.firstName &&
    !!form.lastName &&
    !!form.email &&
    !!form.subject &&
    !!form.message;

  const updateForm = (key, value) =>
    setForm({
      ...form,
      [key]: value,
    });

  const onSubmit = e => {
    e.preventDefault();
    setIsLoading(true);
    submitForm({
      ...form,
      subject: `General Contact: ${form.subject}`,
    })
      .then(() =>
        new Promise(resolve =>
          window.gtag(
            'event',
            'conversion',
            { send_to: 'AW-446319677/1b-lCJ6es_ABEL2Y6dQB' },
            resolve,
          ),
        ).catch(() => navigate('/form-success')),
      )
      .then(() => navigate('/form-success'));
  };

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
              <form onSubmit={onSubmit}>
                <FormRow>
                  <Label htmlFor="firstName" title="First Name">
                    <Input
                      value={form.firstName}
                      onChange={e => updateForm('firstName', e.target.value)}
                    />
                  </Label>
                  <Label htmlFor="lastName" title="Last Name">
                    <Input
                      value={form.lastName}
                      onChange={e => updateForm('lastName', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="email" title="Email">
                    <Input
                      value={form.email}
                      onChange={e => updateForm('email', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="subject" title="Subject">
                    <Input
                      value={form.subject}
                      onChange={e => updateForm('subject', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="message" title="Message">
                    <Input
                      type="textarea"
                      value={form.message}
                      onChange={e => updateForm('message', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <Button
                  isLoading={isLoading}
                  disabled={isLoading || !isValid}
                  type="submit"
                >
                  Submit
                </Button>
              </form>
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
};
