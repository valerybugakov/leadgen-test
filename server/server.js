import config from 'config'
import express from 'express'
import db from './db'
import fixtures from './fixtures'

const port = config.get('port')
const app = express()
// app.use( template ejs)


// app.get('/?host', (req, res) => {
//   const { host, ref, var1} = req.params
//   // check for domains
//   // if ok respond with script as string
//
//   res.render('script', { keys: keysService.get() })
// })
// app.serve static

app.listen(port, () => {
  console.log('Server is listening on: http://localhost:', port)
})
