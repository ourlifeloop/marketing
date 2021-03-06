const rp = require('request-promise');

const createBody = response => JSON.stringify({ response });

exports.handler = event => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { email } = event.queryStringParameters;
  if (!email) {
    return {
      body: createBody('Invalid Email'),
      statusCode: 200,
    };
  }

  return rp(process.env.MAILCHIMP_API, {
    method: 'POST',
    body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    auth: {
      user: process.env.MAILCHIMP_USER,
      pass: process.env.MAILCHIMP_PASS,
    },
  })
    .then(() => ({ body: createBody('Success'), statusCode: 200 }))
    .catch(err => {
      const response = err.response.body
        ? JSON.parse(err.response.body).title
        : '';
      if (!response) {
        console.error(err);
      }
      return { body: createBody(response), statusCode: 200 };
    });
};
