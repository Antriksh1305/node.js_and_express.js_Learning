const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Welcome to our HomePage');
    }
    else if (req.url === '/about') {
        res.end('This is the About Page');
    }
    else{
        res.end(`<h1>Ooops!!!</h1><p>The file you are looking for is not found</p><a href="/">Back Home</a>`);
    }
})
server.listen(5000);