const http = require('http');

// Create the server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Abhijeet\n'); 
});

// Listen on port 4000
server.listen(4000, () => {
    console.log('Server is running on port 4000');
});
