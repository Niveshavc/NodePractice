const express=require('express')
const app=express()

app.use((req,res,next)=>{
    console.log('iam a first middleware')
    next()
})

app.use((req,res,next)=>{
    console.log('iam a second middleware')
    res.send('<h1>hello my name is nivesh what about your name</h1>')
    next()
})


// const server = http.createServer(app);



app.listen(3000,()=>{
    console.log('http://localhost:3000')
})
