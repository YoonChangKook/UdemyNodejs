const fs = require('fs')
// const book = {
//   title: 'Book title',
//   author: 'Kook',
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json', bookJSON)

// const bookJSON = fs.readFileSync('1-json.json').toString()
// const parsedData = JSON.parse(bookJSON)
// console.log(parsedData.title)

const buffer = fs.readFileSync('1-json.json')
const jsonStr = buffer.toString()
const jsonData = JSON.parse(jsonStr)

jsonData.name = "ASDFASDF"
jsonData.age = 100

const writeBuffer = JSON.stringify(jsonData)
fs.writeFileSync('1-json.json', writeBuffer)
