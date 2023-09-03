const express = require('express');
const app = express();
// const cros = require('cros')

const cors = require('cors')
const port = process.env.PORT || 5000;

const categoryies = require('./data/categories.json')


app.use(cors());


app.get('/',(req,res)=>{
    res.send("News API Running");
})

app.get('/new-category', (req,res)=>{
    res.send(categoryies)
})


app.listen(port,()=>{
    console.log('Dragon News Running',port);
})