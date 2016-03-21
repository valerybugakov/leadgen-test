'use strict'

const http = require('http')
const fs = require('fs')
const path = require('path')
const assert = require('assert')
const MongoClient = require('mongodb').MongoClient

let keys = []
const config = JSON.parse(fs.readFileSync(path.resolve(__dirname, './config.json')))

const insertData = (db, callback) => {
  const keys = [
    {_id: 'test', url: 'test_url', order: 1},
    {_id: 'test2', url: 'test_url_2', order: 2}
  ]

  db.collection('keys').insert(keys, (err, result) => {
    assert(null, err)
    console.log('Inserted successfully')
    callback()
  })
}

MongoClient.connect('mongodb://localhost:27017/seoDb', (err, db) => {
    console.log('error:\n ', err)
    return
  }
  console.log('We are connected')
  const collection = db.collection('keys')
  if (collection.count() === 0) {
    insertData(db, () => db.close())
    // insertData(db).then(db.close)
  }
  keys = collection.find()
})

// Promise factory

const server = http.createServer((req, res) => {
  console.log('headers:', req.headers)

  keys.forEach(key => {
    keys.words.forEach(word => {
      if (title.indexOf(word) > -1 && !cookieExists) {

        break
      }
    })
  })
})

server.listen(config.port, () => {
  console.log(keys)
  console.log('Server is listening on: http://localhost:', config.port)
})
