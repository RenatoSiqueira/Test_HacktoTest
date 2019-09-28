const express = require('express')
const app = express()


app.get('/renato', (req, res) => res.send('Home Renato'))










app.listen(3000, () => console.log('Server Running...'))
