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
    .catch(err =>
      callback(null, {
        body: JSON.parse(err.response.body).title,
        statusCode: 500,
      }),
    );
};
