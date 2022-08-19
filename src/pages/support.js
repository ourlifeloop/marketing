import React, { useState } from 'react';
import { Link, navigate } from 'gatsby';

import { submitForm } from '../utils/api';
import { useDevice } from '../utils/effects';
import Button from '../primitives/button';
import ContactSidebar from '../components/contact-sidebar';
import FlexContainer from '../primitives/flex-container';
import FormContainer from '../primitives/form-container';
import FormRow from '../primitives/form-row';
import IgnoreTrackingFormRow from '../primitives/ignore-tracking-form-row';
import Input from '../primitives/input';
import Label from '../primitives/label';
import Layout from '../primitives/layout';
import Section from '../primitives/section';
import SiteWrapper from '../components/site-wrapper';

const USER_TYPES = ['Staff', 'Resident', 'Family'];

const CATEGORIES = [
  'Resident Web Portal',
  'Family Web Portal',
  'iOS Mobile App',
  'Android Mobile App',
  'Authentication',
  'Family Member & Resident Connections',
  'Displays',
  'Transportation',
  'Work Requests',
  'Calendar/Activities',
  'Notification',
  'Announcements/Messages',
];

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  community: '',
  userType: undefined,
  categories: [],
  subject: '',
  message: '',
  ['cc-num']: 'i-exist-so-hubspot-ignores-this-form', // eslint-disable-line
};

const arrayToOptions = (arr) => arr.map((str) => ({ label: str, value: str }));

export default function Support() {
  const { isTablet } = useDevice();
  const [form, setForm] = useState(INITIAL_STATE);
  const [isLoading, setIsLoading] = useState(false);

  const isValid =
    !!form.firstName &&
    !!form.lastName &&
    !!form.email &&
    !!form.community &&
    !!form.userType &&
    !!form.subject &&
    !!form.message;

  const updateForm = (key, value) =>
    setForm({
      ...form,
      [key]: value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    submitForm(
      {
        ...form,
        userType: form.userType.value,
        categories: form.categories.map(({ value }) => value).join(', '),
        subject: `Support Request: ${form.subject}`,
      },
      true,
    ).then(() => navigate('/form-success'));
  };

  return (
    <SiteWrapper title="Support | LifeLoop assisted living community management software">
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <FormContainer>
              <h1>Support</h1>
              <p>Answer a few questions and we'll help you find a solution.</p>
              <IgnoreTrackingFormRow />
              <FormRow>
                <Label htmlFor="firstName" title="First Name">
                  <Input
                    value={form.firstName}
                    onChange={(e) => updateForm('firstName', e.target.value)}
                  />
                </Label>
                <Label htmlFor="lastName" title="Last Name">
                  <Input
                    value={form.lastName}
                    onChange={(e) => updateForm('lastName', e.target.value)}
                  />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="email" title="Email">
                  <Input
                    value={form.email}
                    onChange={(e) => updateForm('email', e.target.value)}
                  />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="community" title="Community">
                  <Input
                    value={form.community}
                    onChange={(e) => updateForm('community', e.target.value)}
                  />
                </Label>
                <Label htmlFor="userType" title="Customer Type">
                  <Input
                    type="select"
                    options={arrayToOptions(USER_TYPES)}
                    value={form.userType}
                    onChange={(value) => updateForm('userType', value)}
                  />
                </Label>
              </FormRow>
              <FormRow>
                <Label
                  htmlFor="categories"
                  title="Category (select all that apply)"
                >
                  <Input
                    type="select"
                    options={arrayToOptions(CATEGORIES)}
                    isMulti
                    value={form.categories}
                    onChange={(value) => updateForm('categories', value || [])}
                  />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="subject" title="Subject">
                  <Input
                    value={form.subject}
                    onChange={(e) => updateForm('subject', e.target.value)}
                  />
                </Label>
              </FormRow>
              <FormRow>
                <Label htmlFor="message" title="Message">
                  <Input
                    type="textarea"
                    value={form.message}
                    onChange={(e) => updateForm('message', e.target.value)}
                  />
                </Label>
              </FormRow>
              <Button
                isLoading={isLoading}
                disabled={isLoading || !isValid}
                type="submit"
                onClick={onSubmit}
              >
                Submit
              </Button>
            </FormContainer>
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
