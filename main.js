const express = require('express')
const config = require('config')
const app = require('./src/app')

const port = process.env.PORT || config.get('rssparser.port')

app.listen(port, () => console.log(`Serwer działa na porcie : ${port}`))
