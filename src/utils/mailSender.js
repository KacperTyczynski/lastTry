const Mailgun = require('mailgun-js')

function MailSender(config){
    if (!new.target) {
        return new MailSender(config)
    }

    _mailgun = new Mailgun({
        apiKey: "71b35d7e-8c124c2b",
        domain: "sandboxe0f16c314a3d4617a3a0e4cadac299be.mailgun.org"
    })
    
    
    this.send = async (to, content) => {
        return _mailgun.messages()
        .send({
            from: 'tyczynski.kacper1@gmail.com',
            to: to,
            subject: 'Prasówka',
            text: 'Świeże wiadomości z twoich źródeł',
            html: content,
        })
    }
}
module.exports= MailSender