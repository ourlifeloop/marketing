const { map } = require('lodash');
const nodemailer = require('nodemailer');
// const querystring = require('querystring');
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

  const { isSupport, form } = event.body;
  console.log(event.body, isSupport, form);
  if (!form) {
    return { statusCode: 400 };
  }

  const targetEmail =
    isSupport === 'true'
      ? process.env.SUPPORT_EMAIL
      : process.env.INQUIRY_EMAIL;

  const { subject, ...rest } = form;

  console.log(targetEmail, isSupport, isSupport === 'true', form);

  return transport
    .sendMail({
      from: form.email || 'do_not_reply@ourlifeloop.com',
      to: targetEmail,
      subject: form.subject || 'Form Submission - Marketing',
      html: map(rest, (value, key) => `<p>${key}: ${value}</p>`).join(),
    })
    .then(() => ({ statusCode: 200 }))
    .catch(err => {
      console.error(err);
      return { statusCode: 500 };
    });
};
