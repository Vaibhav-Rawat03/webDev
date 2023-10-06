import http from 'http';

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World This is my first node js web server');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About section of this page');
  } else if (req.url === '/html') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>HTML</h1>'); // Serve the HTML directly
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Kya khojna chahta hai bhai');
  }
});

const port = 4040;

server.listen(port, () => {
  console.log(`Server on ${port}`);
});
