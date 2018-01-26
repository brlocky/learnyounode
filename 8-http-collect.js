var http = require('http')
var url = process.argv[2]

http.get(url, (response) => {
    let fullText = '';
    response.setEncoding('utf-8')
    response.on("data", (line) => { fullText += line })
    response.on("error", console.error)
    response.on("end", () => {
        console.log(fullText.length)
        console.log(fullText)
    })
}).on('error', console.error)