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
  resident: '',
  community: '',
  cityState: '',
  contact: '',
  subject: '',
  message: '',
};

export default function Recommend() {
  const { isTablet } = useDevice();
  const [form, setForm] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const isValid =
    !!form.firstName &&
    !!form.lastName &&
    !!form.email &&
    !!form.community &&
    !!form.cityState &&
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
      subject: `Family Recommendation: ${form.subject ||
        'I want a community to utilize LifeLoop.'}`,
    }).then(() => navigate('/form-success'));
  };

  return (
    <SiteWrapper title="Recommend Us | LifeLoop assisted living community management software">
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <FormContainer>
              <h1>Recommend Us</h1>
              <p>
                Want to recommend LifeLoop to a community? Let us know and we'll
                get the ball rolling.
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
                  <Label htmlFor="community" title="Recommended Community">
                    <Input
                      value={form.community}
                      onChange={e => updateForm('community', e.target.value)}
                    />
                  </Label>
                  <Label htmlFor="cityState" title="Community City & State">
                    <Input
                      value={form.cityState}
                      onChange={e => updateForm('cityState', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="contact" title="Community Contact (optional)">
                    <Input
                      value={form.contact}
                      onChange={e => updateForm('contact', e.target.value)}
                    />
                  </Label>
                  <Label htmlFor="resident" title="Resident Name (optional)">
                    <Input
                      value={form.resident}
                      onChange={e => updateForm('resident', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="subject" title="Subject (optional)">
                    <Input
                      value={form.subject}
                      onChange={e => updateForm('subject', e.target.value)}
                      placeholder="I want a community to utilize LifeLoop."
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
                <Link key="demo" to="/demo">
                  Would you like to schedule a demo?
                </Link>,
                <Link key="support" to="/support">
                  Do you need technical support?
                </Link>,
                <Link key="contact" to="/contact">
                  Would you like to send us a message?
                </Link>,
              ]}
            />
          </FlexContainer>
        </Section>
      </Layout>
    </SiteWrapper>
  );
}
