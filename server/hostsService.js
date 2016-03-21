import { Host } from './db'

let hosts = []

setInterval(async () => {
  hosts = await Host.find()
}, 2000)

const get = () => hosts

export default { get }


