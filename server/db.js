//exports promise of DB

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


// Promise factory or async yield
