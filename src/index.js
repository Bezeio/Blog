const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars');
const app = express()
const port = 3000

app.use(morgan('combined'))
    //template engine
app.engine('hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

app.get('/', (req, res) => {
    res
    // res.setHeader('Content-type', 'application/json')
    // res.setHeader('X-Powered-By', 'Node.js')
    res.render('home');
})
app.get('/news', (req, res) => {
    res
    // res.setHeader('Content-type', 'application/json')
    // res.setHeader('X-Powered-By', 'Node.js')
    res.render('news');
})
app.listen(port, () => console.log(`Example app listening on port http://localhost:${port}`))