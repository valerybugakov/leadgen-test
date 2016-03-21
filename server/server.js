import express from 'express'
import config from 'config'
import db from './db'
import fixtures from './fixtures'
import keysService from './keysService'
import hostsService from './hostsService'

const port = config.get('port')
const app = express()

// setInterval(() => console.log(keysService.get()), 2000)
app.set('view engine', 'ejs')

// check for domains
// if ok respond with script as string
app.get('/?host', (req, res) => {
  const { host, ref, var1 } = req.query
  const keys = keysService.get()
  const hosts = hostsService.get()
  console.log(hosts)

  // console.log(req.query)
  // console.log(`keys: ${keys}, host: ${host}`)
  // keys.map(key => console.log(key.words))
  // hosts.map(hostObj => console.log(hostObj.hostname))

  if (hosts.some(hostObj => hostObj.hostname === host)) {
    res.render('script', { keys })
    return
  }

  console.log('Omg, wrong domain!')
  res.sendStatus(200)
})

app.listen(port, () => {
  console.log('🔥 Server is listening on: http://localhost:', port)
})
