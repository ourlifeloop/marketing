const { map } = require('lodash');
const nodemailer = require('nodemailer');
// const querystring = require('querystring');
const mandrillTransport = require('nodemailer-mandrill-transport');

const transport = nodemailer.createTransport(
  mandrillTransport({
    auth: { apiKey: process.env.MANDRILL_APIKEY },
  }),
);

exports.handler = (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { isSupport, form } = JSON.parse(event.body);
  if (!form) {
    return { statusCode: 400 };
  }

  const targetEmail = isSupport
    ? process.env.SUPPORT_EMAIL
    : process.env.INQUIRY_EMAIL;

  const options = {
    from: 'do_not_reply@ourlifeloop.com',
    to: [
      targetEmail,
      // TODO remove once support email is confirmed to work
      'mckayla.bruner@ourlifeloop.com',
      'ashley.rutan@ourlifeloop.com',
    ],
    subject: form.subject || 'Form Submission - Marketing',
    html: map(form, (value, key) => `<p>${key}: ${value}</p>`).join(''),
  };

  console.log(JSON.stringify(options, null, 2));

  return transport
    .sendMail(options)
    .then(() => ({ statusCode: 200 }))
    .catch((err) => {
      console.error(err);
      return { statusCode: 500 };
    });
};
