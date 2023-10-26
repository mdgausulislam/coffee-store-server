const express = require( 'express');
const cors = require('cors');
const app=express();
const port=process.env.PORT||5000;

app.use(cors());
app.use(express.json());

app.get('/',(req,res)=>{
    res.send('server are running in coffee store')
})

app.listen(port,()=>{
    console.log(`Coffee store server are ${port}`);
})