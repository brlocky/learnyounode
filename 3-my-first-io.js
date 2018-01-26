var fs = require('fs')

var filename = process.argv[2]
var buf = fs.readFileSync(filename)
var str = buf.toString()
var strSplited = str.split("\n")

console.log(strSplited.length - 1)