import { Key } from './db'
import config from 'config'

let keys = []

const setKeys= async () => {
  keys = await Key.find()
}

setInterval(setKeys, config.get('updateInterval'))
setKeys();
const get = () => keys;

export default { get }


