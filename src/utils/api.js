import 'whatwg-fetch';

export const subscribe = (email) =>
  fetch(`/.netlify/functions/subscribe?email=${email}`, {
    method: 'POST',
  }).then((response) => response.json());
