const express = require('express');
const PORT = 3000;
const app = express();

app.get('/',(req,res,next)=>{
    res.send("Hello World!");
})
const apiRouter = require('./routes/api-routes');
app.use('',apiRouter);
app.listen(PORT,()=>{
    console.log(`Server is listening at http://localhost:3000`);
})
module.exports = app;