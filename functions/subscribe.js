// const rp = require('request-promise');

exports.handler = (event, context, callback) => {
  console.log(event, process.env.MAILCHIMP_API);

  callback(null, { statusCode: 200 });
};
