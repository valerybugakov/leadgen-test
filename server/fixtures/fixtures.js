import { Key, Host } from '../db'
import assert from 'assert'

const keys = [
  {
    order: 1,
    words: ['Stack Overflow', 'javascript'],
    url: 'https://youtube.com/?data=placeholder_for_var1',
  },
  { words: ['test2', 'omg'], url: 'facebook.com', order: 2 },
  { words: ['localhost', 'github'], url: 'google.com', order: 3 },
]

const hosts = [{ name: 'localhost' }, { name: 'github' }]

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
  } catch (err) {
    console.error(err)
  }
  process.exit()
}

initDummyData()
