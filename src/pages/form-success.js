import React from 'react';
import { Link } from 'gatsby';

import TitleSection from '../primitives/title.section';
import SiteWrapper from '../components/site-wrapper';
import Button from '../primitives/button';
import Layout from '../primitives/layout';

export default () => (
  <SiteWrapper>
    <Layout>
      <TitleSection fullHeight header="Form Submittted">
        <p>
          Your inquiry has been successfully received. We will be reaching out
          to you shortly.
        </p>
        <Link to="/">
          <Button>Back to LifeLoop</Button>
        </Link>
      </TitleSection>
    </Layout>
  </SiteWrapper>
);
