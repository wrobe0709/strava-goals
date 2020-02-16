const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const config = {
    name: 'sample-express-app',
    port: 4000,
    host: '0.0.0.0',
};

const app = express();

app.use(bodyParser.json());
app.use(cors());

// TODD: don't allow CORS in prod
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/', (req, res) => {
    res.status(200).send('hello world');
});

app.post('/strava-auth', function (req, res) {
  console.log(req.body);
  res.send({ status: 'success' });
})

app.listen(config.port, config.host, (e)=> {
    if(e) {
        throw new Error('Internal Server Error');
    }
    console.log(`${config.name} running on ${config.host}:${config.port}`);
});