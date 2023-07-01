const express = require('express')

serverport = require('./configs/server.config')

const app = express()

app.listen(serverport.PORT, ()=> {
    console.log("server Startedddd");
})