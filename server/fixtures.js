import db, { Key, Host } from './db'
import assert from 'assert'

const keys = [
  { words: ['test', 'test2'], url: 'test_url', order: 1 },
  { words: ['test2', 'omg'], url: 'facebook.com', order: 2 },
  { words: ['localhost', 'github'], url: 'google.com', order: 3 },
]

const hosts = [{ hostname: 'localhost' }, { hostname: 'github' }]

const insertCollectionData = (schema, data) => {
  schema.collection.insert(data, {}, (err) => {
    if (err) {
      assert(null, err)
      return
    }
    console.log('Inserted successfully')
  })
}

const initDummyData = async () => {
  try {
    if (await Key.count({}) === 0) {
      insertCollectionData(Key, keys)
    }

    if (await Host.count({}) === 0) {
      insertCollectionData(Host, hosts)
    }
  } catch(err) {
    console.error(err)
  }
}

db.once('open', initDummyData)
