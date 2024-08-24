const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;

    // Set the response header to send HTML content
    res.setHeader('Content-Type', 'text/html');

    if (url === '/home') {
        res.write('<html>');
        res.write('<head><title>Home Page</title></head>');
        res.write('<body><h1>Welcome home</h1></body>');
        res.write('</html>');
    } else if (url === '/about') {
        res.write('<html>');
        res.write('<head><title>About Us</title></head>');
        res.write('<body><h1>Welcome to About Us page</h1></body>');
        res.write('</html>');
    } else if (url === '/node') {
        res.write('<html>');
        res.write('<head><title>Node.js Project</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
    } else {
        res.write('<html>');
        res.write('<head><title>404 Not Found</title></head>');
        res.write('<body><h1>Page not found</h1></body>');
        res.write('</html>');
    }

    // End the response
    res.end();
});

// Server listens on port 4000
server.listen(4000);
