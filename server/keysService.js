import { Key } from './db'
import config from 'config'

let keys = []

const setKeys = async () => {
  keys = await Key.find()
}

setKeys()
setInterval(setKeys, config.get('updateInterval'))

const get = () => keys

export default { get }
