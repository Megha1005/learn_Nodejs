//Single reusable function for forecast

const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=d8a66d89ef0805fa21fad938365917c2&query=' + latitude + ',' + longitude + '&units=f'
    request({url  , json:true},(error, {body}) =>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(body.error){
            callback('Unable to find location. Try another search!',undefined)
        }  
        else{
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently "+ body.current.temperature + " degrees out. It feels like "+ body.current.feelslike + " degrees out"                
            )
        }  
    })
}
    // forecast(37.8267,-122.4233, (error,data) =>{
    //     console.log('Error',error)
    //     console.log('Response', data)
    // })

module.exports = forecast    