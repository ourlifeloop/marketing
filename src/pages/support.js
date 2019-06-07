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
import Label from '../primitives/label';
import Input from '../primitives/input';

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
  'Maintenance',
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
};

const arrayToOptions = arr => arr.map(str => ({ label: str, value: str }));

export default () => {
  const { isTablet } = useDevice();
  const [form, setForm] = useState(INITIAL_STATE);

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

  const onSubmit = e => {
    e.preventDefault();
    console.log(form);
    navigate('/form-success');
  };

  return (
    <SiteWrapper>
      <Layout>
        <Section>
          <FlexContainer
            direction={isTablet ? 'column' : 'row'}
            justify="spacebetween"
          >
            <FormContainer>
              <h1>Support</h1>
              <p>Answer a few questions and we'll help you find a solution.</p>
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
                  <Label htmlFor="community" title="Community">
                    <Input
                      value={form.community}
                      onChange={e => updateForm('community', e.target.value)}
                    />
                  </Label>
                  <Label htmlFor="userType" title="Customer Type">
                    <Input
                      type="select"
                      options={arrayToOptions(USER_TYPES)}
                      value={form.userType}
                      onChange={value => updateForm('userType', value)}
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
                      onChange={value => updateForm('categories', value || [])}
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
                <Button disabled={!isValid} type="submit">
                  Submit
                </Button>
              </form>
            </FormContainer>
            <ContactSidebar
              links={[
                <Link key="contact" to="/contact">
                  Would you like to send us a message?
                </Link>,
                <Link key="recommend" to="/recommend">
                  Are you a family member?
                </Link>,
                <Link key="contact" to="/demo">
                  Would you like to schedule a demo?
                </Link>,
              ]}
            />
          </FlexContainer>
        </Section>
      </Layout>
    </SiteWrapper>
  );
};
