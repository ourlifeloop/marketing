const { map } = require('lodash');
const nodemailer = require('nodemailer');
const querystring = require('querystring');
const mandrillTransport = require('nodemailer-mandrill-transport');

const transport = nodemailer.createTransport(
  mandrillTransport({
    auth: { apiKey: process.env.MANDRILL_APIKEY },
  }),
);

exports.handler = event => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { isSupport, form } = querystring.parse(event.body);
  if (!form) {
    return { statusCode: 200 };
  }

  const targetEmail =
    isSupport === 'true'
      ? process.env.SUPPORT_EMAIL
      : process.env.INQUIRY_EMAIL;

  const { subject, ...rest } = form;

  return transport
    .sendMail({
      from: form.email,
      to: targetEmail,
      subject: form.subject,
      html: map(rest, (value, key) => `<p>${key}: ${value}</p>`).join(),
    })
    .then(() => ({ statusCode: 200 }))
    .catch(err => {
      console.error(err);
      return { statusCode: 500 };
    });
};
