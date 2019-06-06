import 'whatwg-fetch';

export const subscribe = email => {
  fetch('/.netlify/functions/subscribe').then(response => response.json());
};
