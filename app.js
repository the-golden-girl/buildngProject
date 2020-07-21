const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./server/routes');

const app = express();

app.use('/uploads', express.static(__dirname + '/uploads'));

app.use(bodyParser.json());

app.use(routes);

// app.all("/*", (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
//     res.next();
// })

app.listen(3000, () => console.log('express js app listening on port 3000'));