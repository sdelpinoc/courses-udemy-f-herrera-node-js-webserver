import express from 'express';

// var hbs = require('hbs');
import hbs from 'hbs';
import 'dotenv/config';

import { fileURLToPath } from 'url';
import path, { dirname } from 'path';

const app = express();
const port = process.env.PORT;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log({__filename});
// console.log({__dirname});

// Handlebars
app.set('view engine', 'hbs');
// app.set('views', __dirname + '/views');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// We need to remove index.html, from the route below
app.use(express.static('public/templated-roadtrip'));

// hbs
app.get('/', (req, res) => {
    // res.send('Hello world!!!');
    res.render('home', {
        firstName: 'Sergio',
        title: 'Node course'
    });
});

app.get('/generic', (req, res) => {
    // res.send('Hello world!!!');
    res.render('generic', {
        firstName: 'Sergio',
        title: 'Node course'
    });
});

app.get('/elements', (req, res) => {
    // res.send('Hello world!!!');
    res.render('elements',{
        firstName: 'Sergio',
        title: 'Node course'
    });
});

// Serve static content
// Middleware
// Templated test
// app.use(express.static('public/templated-roadtrip', {
//     extensions: ['html', 'htm'],
// }));

// app.get('/', (req, res) => {
//     res.send('Home page');
// });

// app.get('/hello-world', (req, res) => {
//     res.send('Hello World from their respective route')
// });

// Page not found(404)
app.get('*', (req, res) => {
    // res.send('404 | Page not found');
    // res.sendFile(__dirname + '/public/404.html');
    res.sendFile(path.join(__dirname, 'public', '404.html'));
});

// app.listen(8080);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});