var total = 0

process.argv.slice(2).forEach((item) => {
    total += Number(item)
})

console.log(total)
