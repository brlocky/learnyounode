var fs = require('fs')
var path = require('path')

var folder = process.argv[2]
var ext = '.' + process.argv[3]

fs.readdir(folder, (err, data) => {
    if (err) {
        return console.log(err)
    }

    data.forEach((file) => {
        if (path.extname(file) === ext) {
            console.log(file)
        }
    })
})