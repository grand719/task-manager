const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lukasz.adam.pawlowski@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}`
    })
}

const sendRemoveEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'lukasz.adam.pawlowski@gmail.com',
        subject: 'Account remove',
        text: `Why are you leaving us, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendRemoveEmail
}