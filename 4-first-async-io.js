var fs = require('fs')

var filename = process.argv[2]
fs.readFile(filename, (err, data) => {
    if (err) {
        return console.log(err)
    }
    console.log(data.toString().split('\n').length - 1)
})