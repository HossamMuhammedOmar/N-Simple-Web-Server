const http = require('http');
const fs = require('fs');
const url = require('url');

///////////////////////////////
// SERVER

const tempOV = fs.readFileSync(`${__dirname}/template-overview.html`, 'utf-8');
const tempCD = fs.readFileSync(`${__dirname}/template-card.html`, 'utf-8');
const tempPR = fs.readFileSync(`${__dirname}/template-product.html`, 'utf-8');
const data = fs.readFileSync(`${__dirname}/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  // DISPLAY OVERVIEW PAGE
  if (pathName === '/' || pathName === '/home') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end(tempOV);
  }
  // DISPLAY PRODUCT PAGE
  else if (pathName === '/about') res.end('Welcome To About Page');
  // API
  else if (pathName === '/api') {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(data);
    // NOT FOUND PAGE
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
