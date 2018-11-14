const express = require('express')
const app = express()
const port = 8000

app.get('/', (req, res) => res.sendFile('/Users/letoth/Documents/prezi/index.html'))
app.get('/demo.js', (req, res) => res.sendFile('/Users/letoth/Documents/prezi/demo.js'))
app.get('/prezi_player.js', (req, res) => res.sendFile('/Users/letoth/Documents/prezi/prezi_player.js'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))