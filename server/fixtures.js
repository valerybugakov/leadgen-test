import dbPromise from './db';

export default dbPromise.then(db => {
    const keys = [
      { _id: 'test', url: 'test_url', order: 1 },
      { _id: 'test2', url: 'test_url_2', order: 2 }
    ]

  return db.collection('keys').insert(keys, (err, result) => {
      assert(null, err)
      console.log('Inserted successfully')
      callback()
    })
  }
)
