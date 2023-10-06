import express from 'express'
import fs from 'fs'
import path from 'path'
import {fileURLToPath} from 'url'

const a=express();
const filename=fileURLToPath(import.meta.url) //gets the filename
const __dirname=path.dirname(filename)  //gets the directory name from the filename

a.get('/' , (req,res) =>{
    res.send("First page using express huehuehue")
})

a.get('/hello/:name' , (req,res)=>{  //:name is a placeholder(kind os a variable) that holds the value thatb may alter in the url like /hello/avi avi is :name
    res.send('Hello' + req.params.name)   //req.params extracts the avi from the url 
})

a.get('/about' , (req,res) =>{
    res.send("This is the about page")
})
 
//__dirname has the file path and is used to send he path of this file and the file to the client
a.get('/html', (req,res) =>{
    // const read=fs.readFileSync('hellobrowser.html')
    res.sendFile(path.join(__dirname, 'hellobrowser.html'))
})  

a.get('*' , (req,res) =>{
    res.send("Kya khojna cahata h bhai")
})

a.listen(4000 , () =>{
    console.log(`Server running on port 4000`)
})