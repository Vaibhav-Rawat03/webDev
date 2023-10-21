import express from 'express'

const app=express()

app.get('/',(req,res) =>{
    res.send("This is first page")
})

app.listen(4000,()=>{
    console.log("Server running")
})