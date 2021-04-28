function RssController (storage) {
    if (!new.target) {
        return new RssController(storage)
    }

    const _storage = storage

    this.add = async (data) => {
        storage.insert('user', { email: data.email, rss: data.rss || [] })
    }

    this.remove = async (data) => {
        return _storage.remove('user', data)
    }

    this.find = async (email) => {
        return _storage.find('user', email)
    }
}

module.exports = RssController