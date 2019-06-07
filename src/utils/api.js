import 'whatwg-fetch';

export const subscribe = email =>
  fetch(`/.netlify/functions/subscribe?email=${email}`, {
    method: 'POST',
    mode: 'no-cors',
  }).then(response => response.json());
