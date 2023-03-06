require('dotenv').config()
const express = require('express')
const app = express()
const PORT = process.env.PORT
const mongoose =require('mongoose')
const MONGO_URI = process.env.MONGO_URI


// Express Settings
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
// app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))


//connect to mongoose
mongoose.set('strictQuery', true);
mongoose.connect(
  MONGO_URI,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log('connected to mongo: ', process.env.MONGO_URI)
  }
)
  
app.use(express.json())

// Controllers & Routes
const controllers = require('./controllers/books.js')
app.use('/books', require('./controllers/books'));

app.get('/', (req, res) => {
	res.json('Hello World')
})

app.get('*', (req, res) => {
	res.render('error404')
});

//Listen for Connections
app.listen(process.env.PORT)