const express = require('express')
const app = express()
app.use('/',(req,res)=>{
    res.send('SERVER IS RUNNING WITH THE POWER OF faHEEM')
})
app.listen('5000', console.log('sERVER HAS STARTED'))