import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
dotenv.config();
// const sendGrid = "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"
// console.log();

// sgMail.setApiKey(process.env.SENDGRID_EMAIL);

// sgMail.send({
//   to: "storevfweb@gmail.com",
//   from: "storevfweb@gmail.com",
//   subject: "test",
//   text: "test test test",
// });
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_EMAIL);
// const msg = {
//   to: "shhadyse@gmail.com", // Change to your recipient
//   from: "storevfweb@gmail.com", // Change to your verified sender
//   subject: "Sending with SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log("Email sent");
//   })
//   .catch((error) => {
//     console.error(error);
//   });
