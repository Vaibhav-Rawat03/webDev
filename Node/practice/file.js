import fs from 'fs'

// fs.readFile('file.txt' , 'utf8' , async (err , data) =>{
//         const print = await data;
//         console.log(print)
// })

const a=fs.readFileSync('file.txt')
console.log(a.toString())
console.log("Done reading")

// fs.writeFile('file2.txt' , "this is written", () =>{
//     console.log("written")
// })

const a2=fs.writeFileSync('File2.txt' , "This is sync witten")

fs.writeFile('file2.txt' , "this is written", () =>{
    console.log("written")
})