const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

// a simple endpoint for doing an application health check to the backend
app.get('/health', (req, res) => {
  res.send('not-ok')
})

// a dummy endpoint in the app that makes it possible to do some code changes and to ensure that the deployed version has really changed
app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)
})
