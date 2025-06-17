const express = require('express')
const app = express()
app.use(express.json())

app.get('/hello', (req, res) => {
	res.send('Hello, World!')
})

app.post('/sum', (req, res) => {
	const { a, b } = req.body
	const sum = a + b
	res.send({ sum })
})

module.exports = app
