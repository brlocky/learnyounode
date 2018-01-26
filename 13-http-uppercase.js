let http = require('http'),
    url = require('url'),
    port = process.argv[2]

var server = http.createServer(function (req, res) {
    if (req.method == 'GET') {
        let urlData = url.parse(req.url, true)
        let isParseTime = urlData.pathname === '/api/parsetime'
        let isUnixTime = urlData.pathname === '/api/unixtime'

        if (isParseTime || isUnixTime) {
            let date = new Date(urlData.query.iso)

            let outputData = {}
            if (isParseTime) {
                outputData.hour = date.getHours()
                outputData.minute = date.getMinutes()
                outputData.second = date.getSeconds()
            }
            if (isUnixTime) {
                outputData.unixtime = date.getTime()
            }

            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(outputData))
        }
    }
})

server.listen(port)

