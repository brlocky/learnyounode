let http = require('http'),
    port = process.argv[2]

var server = http.createServer(function (req, res) {

    if (req.method == 'POST') {
        var body = '',
            uppercaseText = ''

        req.setEncoding('utf-8')
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {
            body = body.toUpperCase();
            res.end(body);
        });
    }
    else
    {
        res.end()
    }
});

server.listen(port);

