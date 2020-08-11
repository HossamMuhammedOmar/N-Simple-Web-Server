const http = require('http');
const fs = require('fs');
const url = require('url');

///////////////////////////////
// SERVER

const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === '/' || pathName === '/home') res.end('Welcome To Home Page');
  else if (pathName === '/about') res.end('Welcome To About Page');
  else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'type-error': 'not found page',
    });
    res.end('<h1 style="color:brown"> Page not found </h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listining to requist on port 8000');
});
