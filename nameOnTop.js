const http = require('http');
const url = require('url');

let latestMessage = ''; // Variable to store only the latest message

// Create the server
const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (req.method === 'GET') {
        // Display the latest message
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`
            <html>
                <body>
                    <p>${latestMessage}</p>
                    <form method="POST" action="/submit">
                        <input type="text" name="message" required><br>
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
        `);
    } else if (req.method === 'POST' && parsedUrl.pathname === '/submit') {
        let body = '';
        req.on('data', chunk => body += chunk);
        req.on('end', () => {
            const message = new URLSearchParams(body).get('message');
            if (message) {
                // Update the latest message
                latestMessage = message;

                // Serve the updated page with the latest message
                res.writeHead(302, { 'Location': '/' });
                res.end();
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('No message provided');
            }
        });
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 Not Found');
    }
});

server.listen(3000, () => console.log('Server running at http://localhost:3000'));
