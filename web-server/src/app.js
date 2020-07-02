const express = require ('express')
const path = require('path')

//path.join  --> manipulates the string
//console.log(__dirname)   // directory name from root to dir
//console.log(__filename)   // file name whole path

const app = express()
const publicDirectoryPath = path.join(__dirname,'../public')

// customize the server
app.use(express.static(publicDirectoryPath))

// the function below tells what needs to be sent back when someone visits the homepage

// No need to write this below

// app.get('', (req, res) =>  {
//     res.send('<h1> This is the Homepage </h1>')
// })

// app.get('/help', (req,res) =>{
//     res.send([{
//         name : 'Megha' },
//         {
//         name: 'Sarah'
//     }])
// })

// app.get('/about', (req,res) => {
//     res.send('<h2> This is the ABOUT page </h2>')
// })

app.get('/weather', (req,res) => {
    res.send({
        location : 'Philadelphia',
        forecast : 'weather'
    })
})


app.listen(3000, () =>{
    console.log("Our server is up at port 3000")
})