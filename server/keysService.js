import { Key } from './db'

let keys = []

// .exec() gives you a fully-fledged promise
setInterval(async () => {
  // keys = Key.find().exec().catch(err => console.error(err))
  try {
    keys = await Key.find()
  } catch (err) {
    console.error(err)
  }
}, 2000)

const get = () => keys

export default { get }


