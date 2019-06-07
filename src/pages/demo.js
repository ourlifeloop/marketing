import React, { useState } from 'react';
import { Link, graphql, navigate } from 'gatsby';
import classNames from 'classnames';
import { map } from 'lodash';

import FlexContainer from '../primitives/flex-container';
import SiteWrapper from '../components/site-wrapper';
import FormRow from '../primitives/form-row';
import { useDevice } from '../utils/effects';
import Section from '../primitives/section';
import Layout from '../primitives/layout';
import Button from '../primitives/button';
import Label from '../primitives/label';
import Input from '../primitives/input';
import NAVIGATION from '../utils/navigation';

import styles from './demo.module.scss';

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
            <FlexContainer direction="column" className={styles.formContainer}>
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
            </FlexContainer>
            <FlexContainer direction="column">
              <div
                className={classNames(styles.infoContainer, {
                  [styles.infoContainerVertical]: isTablet,
                })}
              >
                <h3>Other ways to connect with us</h3>
                <Link className={styles.infoLink} to="/recommend">
                  Are you a family Member?
                </Link>
                <Link className={styles.infoLink} to="/contact">
                  Would you like to send us a message?
                </Link>
                <Link className={styles.infoLink} to="/support">
                  Do you need technical support?
                </Link>
              </div>
              <div
                className={classNames(styles.infoContainer, {
                  [styles.infoContainerVertical]: isTablet,
                })}
              >
                <h3>Interested in joining the team?</h3>
                <p>
                  We care about our customers. We are problem solvers, we
                  embrace growth and trust that everyone is here to foster their
                  passion.
                </p>
                <p>
                  If you are interested in applying for a position at LifeLoop,
                  please send your resume to{' '}
                  <a href={`mailto:${data.site.siteMetadata.careers}`}>
                    {data.site.siteMetadata.careers}
                  </a>
                </p>
              </div>
              <div
                className={classNames(styles.infoContainer, {
                  [styles.infoContainerVertical]: isTablet,
                })}
              >
                <h3>How LifeLoop Works</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur in scelerisque augue. Sed consectetur arcu sed orci
                  hendrerit tempor.
                </p>
                {map(
                  NAVIGATION.features.subNav,
                  ({ key, Icon, name, link }) => (
                    <Link key={key} to={link} className={styles.infoLink}>
                      <FlexContainer align="center">
                        <Icon className={styles.featureIcon} />
                        <span className={styles.featureName}>{name}</span>
                      </FlexContainer>
                    </Link>
                  ),
                )}
              </div>
            </FlexContainer>
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
        careers
      }
    }
  }
`;
