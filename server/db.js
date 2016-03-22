import mongoose from 'mongoose'

//add live DB
const dbURI = ''
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

//connectToDb(callback);
//export default new Promise((resolve, reject) => {
//  connectToDb((err, result) => {
//    if (err) {reject(err)}
//    resolve(result);
//  });
//})