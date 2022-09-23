import React, { useEffect } from 'react';
import FlexContainer from '../primitives/flex-container';

export default function HubspotFormRenderer({
  id,
  region,
  portalId,
  formId,
  version,
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.hsforms.net/forms/v2.js';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      if (window.hbspt) {
        const result = window.hbspt.forms.create({
          region,
          version,
          portalId,
          formId,
          target: `#${id}`,
        });
        console.log(result, '-------- result');
      }
    });
  }, [region, version, portalId, formId, id]);

  return <FlexContainer direction="column" id={id} />;
}
