var http = require('http')
var urls = process.argv.splice(2)

let results = [],
    count = 0
urls.forEach((url, index) => {
    callUrl(url, (data) => {
        results[index] = data
        if(++count === urls.length) {
            results.forEach(item => console.log(item))
        }
    })
})

function callUrl(url, callback) {
    let result = ''
    http.get(url, (response) => {

        response.setEncoding('utf-8')

        response.on("data", (line) => result += line)

        response.on("end", () => {
            callback(result)
        })
    }).on('error', console.error)
}