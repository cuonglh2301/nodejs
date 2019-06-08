const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/user.route')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.set('views', './views')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// var users = [
//     {id: 1, name: 'A'},
//     {id: 2, name: 'B'},
//     {id: 3, name: 'C'}
// ]
// app.get('/', (req, res) => res.send('Hello World!'))

app.get('/', (req, res) => res.render('index', {
    name: 'ABC'
}))
app.use('/users', userRoute)



app.listen(port, () => console.log(`Example app listening on port ${port}!`))