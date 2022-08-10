import React from 'react';

export default function IgnoreTrackingFormRow() {
  return (
    <>
      <label for="cc-num" htmlFor="cc-num" style={{ display: 'none' }}>
        credit card HubspotCollectedFormsWorkaround
        https://community.hubspot.com/t5/APIs-Integrations/How-to-stop-collected-forms-from-collecting-a-form/m-p/299172#M28102
      </label>
      <input
        id="cc-num"
        name="cc-num"
        required=""
        value="HubspotCollectedFormsWorkaround"
        style={{ display: 'none' }}
      />
    </>
  );
}
