const rp = require('request-promise');

exports.handler = (event, context, callback) => {
  const { email } = event.queryStringParameters;
  if (!email) {
    return callback(null, { body: 'Invalid Email', statusCode: 400 });
  }

  return rp(process.env.MAILCHIMP_API, {
    method: 'POST',
    body: JSON.stringify({ email_address: email, status: 'subscribed' }),
    auth: {
      user: process.env.MAILCHIMP_USER,
      pass: process.env.MAILCHIMP_PASS,
    },
  })
    .then(() => callback(null, { body: 'Success', statusCode: 200 }))
    .catch(err => {
      const response = err.response.body
        ? JSON.parse(err.response.body).title
        : '';
      console.log(err.response.body, response);
      callback(null, { body: response, statusCode: 500 });
    });
};
