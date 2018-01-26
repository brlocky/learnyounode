var mymodule = require('./6-my-module')

mymodule(process.argv[2], process.argv[3], (err, data) => {
    if (err) {
        return console.log("Error: " + err)
    }

    data.forEach((item) => {
        console.log(item)
    })

})


