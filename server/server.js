'use strict'

const http = require('http')
const fs = require('fs')
import config from 'config';
const path = require('path');
const express = require('express')
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient
const port = config.get('port');
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json')))


const app = express();
//app.use( template ejs)


app.get('/?host', (req, res) => {
  const { host, ref, var1} = req.params;
  //check for domains
  //if ok respond with script as string

  res.render('script', { keys: keysService.get() });
});
//app.serve static

app.listen(port, () => {
  console.log('Server is listening on: http://localhost:', port);
})
