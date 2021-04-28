const express = require('express')
const config = require('config')
const path = require('path')

// Łączność z bazą
const DB = require('./storage/db')
const db = new DB()
db.connect(config.rssparser.db)

//Pobranie zewnętrznych modułów
// const ErrorHandler = require('./utils/errorHandler')
const MailSender = require('./utils/mailSender')
const MailBuilder = require('./utils/mailbuilder')
const FeedParser = require('./utils/fp3')

const MailController = require('./controllers/mailController')
const RssController = require('./controllers/rssController')

const rssRoutes = require('./routes/rssrroutes')
const mailRoutes = require('./routes/mailroutes')

const mailgunConfig = config.get('rssparser.mailgun')


const feedParser = new FeedParser()
const mailSender = new MailSender()
const mailBuilder = new MailBuilder()
const mailController = new MailController(db,feedParser,mailSender,mailBuilder)
const rssController = new RssController(db)

const app = express()
app.use(express.static(path.join(__dirname, '../public')))

app.use(express.json());

// app.post('/user', async (req, res) => {
//     try {
//         await rssController.add(req.body)
//         res.status(200).end()
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })

// app.delete('/user', async (req, res) => {
//     try {
//         await rssController.remove(req,body)
//     } catch (e) {
//         res.status(400).send(e.message)
//     }
// })

// app.get('/user', async (req, res) => {
//     try {
//     const user = await rssController.find('')
//     res.send(JSON.stringify({ email: user.email, rss: user.rss }))
//     } catch (e) {
//     res.status(400).send(e.message)
//     }
// })


// app.get('/mail', async (req,res) => {
//     try{
//         const htmlContent = await mailController.build(req.query.email) 
//         res.set('Content-Type', 'text/html').send(htmlContent.html)
//     }catch (e) {
//         console.log(e)
//         res.sendStatus(500)
//     }
// })

// app.post('/mail', async (req,res) => {
//     try{
//         const htmlContent =  await mailController.build(req.query.email)
//         await mailController.send(req.query.email, htmlContent.html)
//         res.status(200).end()
//     } catch (e) {
//         console.log(e)
//         res.sendStatus(500)
//     }
// })


app.use('/v1', rssRoutes(rssController))
app.use('/v1', mailRoutes(mailController))

module.exports = app