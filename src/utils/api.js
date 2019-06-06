import 'whatwg-fetch';

export const subscribe = email =>
  fetch(
    `https://ourlifeloop.netlify.com/.netlify/functions/subscribe?email=${email}`,
    {
      method: 'POST',
    },
  );
