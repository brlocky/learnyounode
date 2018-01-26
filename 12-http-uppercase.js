let http = require('http'),
    port = process.argv[2]

var server = http.createServer(function (req, res) {

    if (req.method == 'POST') {
        var body = ''

        req.setEncoding('utf-8')
        req.on('data', (data) => { body += data; });
        req.on('end', () => { body = body.toUpperCase(); res.end(body); });
    }
    else
    {
        res.end()
    }
});

server.listen(port);

