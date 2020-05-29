const fs= require('fs')
// //read the file and get binary data
// const databuffer= fs.readFileSync('1-json.json')
// //convert the binary data to string
// const dataJSON=databuffer.toString()
// //parsed into object
// const data=JSON.parse(dataJSON)
// //extract a property from it
// console.log(data.author)

const getdata=fs.readFileSync('1-json.json')
const strdata=getdata.toString()
const data=JSON.parse(strdata)


data.name='Megha'
data.age=25
const writenew = JSON.stringify(data)
fs.writeFileSync('1-json.json',writenew)


// //data stored as a javascript object.
// //Goal is to convert to JSON
// const book = {
//     title:'Ego is the enemy',
//     author: 'Ryan Holiday'
// }

// //write data to a file
// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)



// //stringify is not a JS object
// const bookJSON = JSON.stringify(book)
// console.log(bookJSON)

// //parsedData is javascript object
// const parsedData=JSON.parse(bookJSON)
// console.log(parsedData.author)