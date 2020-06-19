const request = require('request')

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')
//const url = 'http://api.weatherstack.com/current?access_key=d8a66d89ef0805fa21fad938365917c2&query=37.8267,-122.4233&units=f'

// without using the property of json

// request({ url: url}, (error, response) => {
//     //console.log(response.body)
//     const data = JSON.parse(response.body)
//     console.log(data.current)
// })

// including the json property 
// request({ url: url , json : true }, (error, response) => {
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if (response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log(response.body.current.weather_descriptions[0] + ". It is currently "+ response.body.current.temperature + " degrees out. It feels like "+ response.body.current.feelslike + " degrees out")
//     }
// })

// // Geocoding 
// // Address --> Latitude & Longitude --> Weather forecast

// const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibWVnaGFhYiIsImEiOiJja2F1YXp0Z3kweHVkMnJyMmw2b2t0bnJ0In0.O87dRfkl4UZbjuiJRp0TWw&limit=1'

// request({url:geocodeurl,json:true}, (error,response) => {
//     if(error){
//         console.log('Unable to connect to location services!')
//     }
//     else if(response.body.features.length === 0){
//         console.log('Unable to find location. Try another search')
//     }
//     else{
//         const latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]
//         console.log("The latitude is " + latitude + " and the longitude is " + longitude)
//     }
// })

geocode('Philadelphia', (error,data) =>{
    console.log('Error',error)
    console.log('Response', data)
})

forecast(37.8267,-122.4233, (error,data) =>{
        console.log('Error',error)
        console.log('Response', data)
    })












// Understand concept of Call Stack, Callback Queue and Event Loop

// console.log('Starting')

// setTimeout function to run some code after a specific amount of time has passed
// setTimeout(()=>{
//     console.log('Timer for 2 seconds')
// },2000)


// console.log('Stopping')


