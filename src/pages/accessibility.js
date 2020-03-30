import React from 'react';
import { Link, graphql } from 'gatsby';

import SiteWrapper from '../components/site-wrapper';
import Section from '../primitives/section';
import Layout from '../primitives/layout';

export default ({ data }) => {
  const support = <Link to="/support">LifeLoop Support</Link>;
  const phone = (
    <a href={`tel:${data.site.siteMetadata.phoneNumber}`}>
      {data.site.siteMetadata.phoneNumber}
    </a>
  );
  return (
    <SiteWrapper>
      <Layout>
        <Section fullHeight width="medium">
          <h1>Accessibility Statement</h1>
          <p>
            LifeLoop, LLC ("LifeLoop") is committed to ensuring digital
            accessibility for all users, including those with disabilities.
            Striving to improve our site's user experience, we will continue
            working to apply all relevant accessibility standards to provide the
            most accessible experience for all. If you have any questions or
            concerns about the accessibility of our website, please contact us
            at {support} or calling us at {phone} or messaging us on social
            media. Please provide specific details on the particular
            accessibility issue.
          </p>
          <p>
            <strong>Reasonable Accommodations</strong>
          </p>
          <p>
            Those requiring reasonable accommodation to access the LifeLoop
            website may send a request to {support} or calling {phone}. In a
            request, please include necessary contact information such as a
            telephone number or email address. Based on the request, LifeLoop
            may require adequate notice to provide a reasonable accommodation.
          </p>
          <p>
            <strong>Third-Party Websites</strong>
          </p>
          <p>
            LifeLoop's website contains links to sites hosted by third parties.
            LifeLoop is unable to make accommodations on these sites and thus
            does not make claims regarding the accessibility of third-party
            websites.
          </p>
          <p>
            <strong>Feedback</strong>
          </p>
          <p>
            We welcome your feedback on the accessibility of LifeLoop. Please
            let us know if you encounter accessibility barriers on LifeLoop by
            contacting us at {support} or by calling us at {phone}. We try to
            respond to feedback within 1 business day.
          </p>
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
