import express from 'express'
import config from 'config'
import db from './db'
import keysService from './keysService'
import hostsService from './hostsService'

const port = config.get('port')
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  const { currentHost, ref, var1 } = req.query
  const keys = keysService.get()
  const hosts = hostsService.get()

  if (hosts.some(host => host.name === currentHost)) {
    console.log('Omg, wrong domain!')
    res.sendStatus(200)
    return
  }

  console.log('Sending script...')
  res.render('script', { currentHost, keys, ref, var1 })
})

app.listen(port, () => {
  console.log(`🔥 Server is listening on: http://localhost:${port}`)
})
