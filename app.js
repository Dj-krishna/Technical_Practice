const express = require('express');
const bodyParser = require('body-parser');
const { listen } = require('express/lib/application');

const app = express();

app.use(bodyParser.json());

app.listen(3000);