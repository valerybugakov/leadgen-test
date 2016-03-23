import { Key, Host } from '../db'
import assert from 'assert'

const keys = [
  {
    order: 1,
    words: ['Stack Overflow', 'javascript'],
    url: 'https://youtube.com/?data=placeholder_for_var1',
  },
  {
    order: 2,
    words: ['es6', 'react vs angular 2'],
    url: 'github.com',
  },
  {
    order: 3,
    words: ['localhost', 'github'],
    url: 'google.com',
  },
]

const hosts = [
  { name: 'localhost' },
  { name: 'github' },
]

const initDummyData = async () => {
  try {
    const keysCount = await Key.count({})
    const hostsCount = await Host.count({})

    if (!keysCount) {
      await Key.insertMany(keys)
    }

    if (!hostsCount) {
      await Host.insertMany(hosts)
    }

    if (!keysCount || !hostsCount) {
      console.log('Inserted successfully')
    }

  } catch (err) {
    console.error(err)
  }

  process.exit()
}

initDummyData()
