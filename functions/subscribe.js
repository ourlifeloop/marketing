const rp = require('request-promise');

exports.handler = (event, context, callback) => {
  const { email } = event.queryStringParameters;
  if (!email) {
    return callback(null, { statusCode: 400 });
  }

  return rp(process.env.MAILCHIMP_API, {
    method: 'POST',
    body: JSON.stringify({ email_address: email, status: 'subscribed' }),
  })
    .then(() => callback(null, { statusCode: 200 }))
    .catch(err => {
      console.log(err);
      callback(null, { statusCode: 500 });
    });
};
