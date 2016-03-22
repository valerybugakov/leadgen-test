import { Host } from './db'
import config from 'config'

let hosts = []

const setHosts = async () => {
  hosts = await Host.find()
}

setHosts()
setInterval(setHosts, config.get('updateInterval'))

const get = () => hosts

export default { get }
