const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Enter Input</title></head>');
    res.write('<body>');
    res.write(`<form action="/message" method="POST"><input type="text" name="message"/><button type="submit">Send</button></form>`);
    res.write('</body>');
    res.write('</html>');
    return res.end(); // ✅ Always return after res.end()
  }

  console.log(req.url, req.method, req.headers);

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title></head>');
  res.write('<body><h1>Hello! Welcome to Node.js course!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(4000, () => {
  console.log('Server is running on port 4000');
});
