// make a node app with express and a route that takes in a name and returns a greeting

const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const Andrea = 'y no work'

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})
