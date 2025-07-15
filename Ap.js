const http = require('http');

const server = http.createServer((req, res) => {
    // console.log(req.url); // This logs the URL path requested
    // res.end('Server received the request'); // This ends the response
    console.log(req.url,req.method,req.headers)
    res.setHeader('Content-Type',"text/html")
    res.write('<html>')
    res.write('<head><title>My first page</title></head')
    res.write('<body> <h1> hello welcome to node js course???</h1></body>')
    res.write('<html>')
    res.write('</html>')
    res.end('Request received');
});

server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
