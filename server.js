
const express = require('express');
const mongoose = require('mongoose');

//    'mongodb+srv://tarun:blacy728@tarun-cluster.2sk5aum.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect('mongodb://localhost/blog')
const PORT = process.env.PORT || 3000
const app = express()
app.use(express.urlencoded({extended:false}))
const articleRouter = require('./routes/articles')
app.set('view engine','ejs')
app.get('/',(req,res)=>{
    const articles = [{
        title : 'Test article title',
        createdAt : new Date(),
        description : 'Test description'
    },
    {
        title : 'Test article title 2',
        createdAt : new Date(),
        description : 'Test description'
    }
]
    res.render('articles/index',{articles:articles})
})

app.use('/articles',articleRouter)

app.listen(PORT,()=>console.log("Started..."))