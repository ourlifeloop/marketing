import React from 'react';
import { Link } from 'gatsby';

import TitleSection from '../primitives/title.section';
import Button from '../primitives/button';

export default function DemoSection() {
  return (
    <TitleSection
      secondary
      header="See how LifeLoop can help connect your community."
    >
      <p>
        See how LifeLoop helps improve relationships between staff members,
        residents and their family members all while providing them with a
        seamless user experience.
      </p>
      <Link to="/demo">
        <Button>Request a Demo</Button>
      </Link>
    </TitleSection>
  );
}
