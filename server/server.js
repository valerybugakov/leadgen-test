import express from 'express'
import config from 'config'
import db from './db'
import keysService from './keysService'
import hostsService from './hostsService'

const port = config.get('port')
const app = express()

app.set('view engine', 'ejs')

app.get('/?host', (req, res) => {
  const { host, ref, var1 } = req.query
  const keys = keysService.get()
  const hosts = hostsService.get()
  console.log(hosts)

  if (hosts.some(hostObj => hostObj.hostname === host)) {
    console.log('Omg, wrong domain!')
    res.sendStatus(200);
    return
  }
  res.render('script', { keys })
})

app.listen(port, () => {
  console.log('🔥 Server is listening on: http://localhost:', port)
})
