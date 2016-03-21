import mongoose from 'mongoose'

const dbURI = 'mongodb://localhost:27017/seoDb'
mongoose.connect(dbURI)

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error: '))
db.once('open', console.log.bind(console, 'We are connected'))

const keySchema = mongoose.Schema({
  words: Array,
  url: String,
  order: Number,
})

const hostSchema = mongoose.Schema({
  hostname: String,
})

export const Key = mongoose.model('Key', keySchema)
export const Host = mongoose.model('Host', hostSchema)

export default db

// exports promise of DB - can it really exports a promise?
// Promise factory or async yield

// MongoClient.connect('', (err, db) => {
//   console.log('error:\n ', err)
//   return
// }
// console.log('We are connected')
// const collection = db.collection('keys')
// if (collection.count() === 0) {
//   insertData(db, () => db.close())
//   // insertData(db).then(db.close)
// }
// keys = collection.find()
// })
