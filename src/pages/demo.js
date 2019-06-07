import React, { useState } from 'react';
import { Link, graphql, navigate } from 'gatsby';

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

const ROLES = [
  'Sales & Marketing',
  'Finance',
  'IT',
  'Maintenance',
  'Transportation',
  'Administrative',
  'Dining',
  'Resident',
  'Family Member',
  'Other',
];

const FEATURES = [
  'Calendar Builder & Management',
  'Digital Signage',
  'Resident Tracking & Reporting',
  'Maintenance',
  'Transportation',
  'Family Portal',
  'Resident Portal',
  'Communication & Messaging (Family, Staff, & Residents)',
  'Photo & Video Sharing',
];

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  company: '',
  email: '',
  phone: '',
  state: '',
  features: [],
  role: undefined,
  comments: '',
};

const arrayToOptions = arr => arr.map(str => ({ label: str, value: str }));

export default ({ data }) => {
  const { isTablet } = useDevice();
  const [form, setForm] = useState(INITIAL_STATE);

  const isValid =
    !!form.firstName &&
    !!form.lastName &&
    !!form.company &&
    !!form.email &&
    !!form.phone &&
    !!form.state &&
    !!form.features.length &&
    !!form.role;

  const updateForm = (key, value) =>
    setForm({
      ...form,
      [key]: value,
    });

  const onSubmit = e => {
    e.preventDefault();
    submitForm({
      ...form,
      role: form.role.value,
      subject: 'Demo Request',
      features: form.features.map(({ value }) => value).join(', '),
    }).then(() => navigate('/form-success'));
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
              <h1>Request a Demo</h1>
              <p>
                See what LifeLoop can do for you. Fill out the form below or
                give us a call at{' '}
                <a href={`tel:${data.site.siteMetadata.phoneNumber}`}>
                  {data.site.siteMetadata.phoneNumber}
                </a>
                .
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
                  <Label htmlFor="company" title="Company Name">
                    <Input
                      value={form.company}
                      onChange={e => updateForm('company', e.target.value)}
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
                  <Label htmlFor="phone" title="Phone">
                    <Input
                      value={form.phone}
                      onChange={e => updateForm('phone', e.target.value)}
                    />
                  </Label>
                  <Label htmlFor="state" title="State">
                    <Input
                      value={form.state}
                      onChange={e => updateForm('state', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label
                    htmlFor="features"
                    title="What features are you interested in learning more about? (select all that apply)"
                  >
                    <Input
                      type="select"
                      options={arrayToOptions(FEATURES)}
                      isMulti
                      value={form.features}
                      onChange={value => updateForm('features', value || [])}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label htmlFor="role" title="Role">
                    <Input
                      type="select"
                      options={arrayToOptions(ROLES)}
                      value={form.role}
                      onChange={value => updateForm('role', value)}
                    />
                  </Label>
                </FormRow>
                <FormRow>
                  <Label
                    htmlFor="comments"
                    title="Comments / Questions (optional)"
                  >
                    <Input
                      type="textarea"
                      value={form.comments}
                      onChange={e => updateForm('comments', e.target.value)}
                    />
                  </Label>
                </FormRow>
                <Button disabled={!isValid} type="submit">
                  Send Request
                </Button>
              </form>
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
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        phoneNumber
      }
    }
  }
`;
