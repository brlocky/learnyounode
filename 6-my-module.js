var fs = require('fs')
var path = require('path')

module.exports = function (folder, ext, callback) {

    var newList = [];
    fs.readdir(folder, (err, data) => {
        if (err) {
            return callback(err)
        }

        data.forEach((file) => {
            if (path.extname(file) === '.' + ext) {
                newList.push(file)

            }
        })
        callback(null, newList)
    })
}