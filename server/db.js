import mongoose from 'mongoose'
import config from 'config'

mongoose.connect(config.get('db'))

const db = mongoose.connection
db.on('error', console.error.bind(console, 'Connection Error:\n'))
db.once('open', console.log.bind(console, 'Connected successfully'))

const keySchema = mongoose.Schema({
  words: Array,
  url: String,
  order: Number,
})

const hostSchema = mongoose.Schema({
  name: String,
})

export const Key = mongoose.model('Key', keySchema)
export const Host = mongoose.model('Host', hostSchema)

export default db
