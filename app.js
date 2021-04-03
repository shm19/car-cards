const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const path = require('path');

const replacer = require('./tools/replacer');

dotenv.config({ path: `${__dirname}/config.env` });
const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', (req, res, next) => {
  req.requestAt = new Date().toLocaleString();
  next();
});

app.get('/', (req, res) => {
  res.redirect('/pages/');
});

app.get('/pages', (req, res) => {
  const pageNumber = req.query.pageNumber;
  html = pageNumber ? replacer.html(pageNumber) : replacer.html(1);
  res.status(200).send(html);
});

app.get('/profile/:id', (req, res) => {
  let profile = replacer.profileHtml(req.params.id * 1);
  res.send(profile);
});

module.exports = app;
