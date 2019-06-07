import 'whatwg-fetch';

export const subscribe = email =>
  fetch(`/.netlify/functions/subscribe?email=${email}`, {
    method: 'POST',
  }).then(response => response.json());

export const submitForm = (form, isSupport = false) =>
  fetch('/.netlify/functions/form-submission', {
    method: 'POST',
    body: JSON.stringify({ isSupport, form }),
  });
