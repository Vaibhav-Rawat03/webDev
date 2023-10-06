import http from 'http'
import fs from 'fs'

const server=http.createServer((req,res) => {
    
    

    if(req.url === '/'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('Hello World This is my first node js web srver');
    }
    else if(req.url === '/about'){
        res.statusCode = 200;
        res.setHeader('Content-Type','text/plain')
        res.end('About sectiopn of this page');
    }

    else if(req.url === '/html'){
        res.statusCode=200;
        res.setHeader('Content-Type', 'text/html')
        const read=fs.readFileSync('hellobrowser.html');
        res.end(read.toString())
        // res.end('<h1>HTML</h1>');
        }

    else{
        res.statusCode=404
        res.setHeader('Content-Type','text/plain')
        res.end('Kya khojna cahta h bhai');
    }
   
})

server.listen(4040,() =>{
    console.log('Server on 4040')
})