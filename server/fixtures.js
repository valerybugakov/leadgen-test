import db, { Key } from './db'
import assert from 'assert'

const keys = [
  { _id: 'test', url: 'test_url', order: 1 },
  { _id: 'test2', url: 'test_url_2', order: 2 },
]

const insertDummyKeys = (data) => {
  Key.collection.insert(data, {}, (err) => {
    if (err) {
      assert(null, err)
      return
    }
    console.log('Inserted successfully')
  })
}

db.once('open', () => {
  Key.count({}).then(count => {
    if (count === 0) {
      insertDummyKeys(keys)
      return
    }

    console.log('Keys has values')
  })
})

