const express = require('express')
const app = express()

app.use(express.static('public'))

app.get('/todo', (req, res) => {
    res.sendFile(__dirname + "/public/todo.json")
})

app.get('/todo.js', (req, res) => {
    res.sendFile(__dirname + "/public/todo.js")
})

app.get('/readtodo', (req, res) => {
    res.sendFile(__dirname + "/public/readtodo.html")
})

app.get('/', (req, res) => {
    res.sendFile(__dirname + "/public/index.html")
})

app.listen(3000)