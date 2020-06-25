const http = require('http')

const url ='http://api.weatherstack.com/current?access_key=d8a66d89ef0805fa21fad938365917c2&query=45,-75&units=f'

const request = http.request(url,(response)=>{
    // let because we will be reassigning it again and again .. Therefore no use on 'const'
    let data = ''
    // register handlers 
    response.on('data', (chunk) => {
        data = data + chunk.toString()
        
    })

    // when things are over to know that we are done
    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => { 
    console.log("An error ", error)
})
request.end()
