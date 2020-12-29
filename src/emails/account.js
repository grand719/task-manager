const sgMail = require('@sendgrid/mail')
const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'lukasz.adam.pawlowski@gmail.com',
    from: 'lukasz.adam.pawlowski@gmail.com',
    subject: 'This is my first creation',
    text: 'This work'
})