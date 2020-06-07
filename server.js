const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')

const home = require('./routes/home')

//configurando bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
    //conf  handlebars
app.engine('handlebars', handlebars({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
    //adionando pasta public
app.use(express.static(path.join(__dirname, 'public')))



app.use('/', home)

const Port = 3000
app.listen(Port, () => {
    console.log(`http://localhost:${Port}`)
    console.log('BREAK SERVER   CTRL + C')
})