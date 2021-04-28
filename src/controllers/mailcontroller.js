function MailController(storage, parser, mail, sender) {

    if (!new.target) {
        return new MailController(storage, parser, mail, sender)
    }

    const _storage = storage
    const _parser = parser
    const _mail = mail
    const _sender = sender

    this.build = async (email) => {
        if (!email) {
            throw new Error('Brak podanego e-maila')
        }

        const user = await _storage.find('user', email)
        const feeds = await _parser.parse(user.rss)

        return _mail.build(feeds)
    }

    this.send = async (email, content) => {
        if (!email) {
            throw new Error('Brak podanego e-maila')
        }
    
        await _sender.send(email, content)
    }
}

module.exports = MailController
