//Single reusable function for forecast

const request = require('request')

const forecast = (latitude,longitude,callback) =>{
    const url ='http://api.weatherstack.com/current?access_key=d8a66d89ef0805fa21fad938365917c2&query=' + latitude + ',' + longitude + '&units=f'
    request({url :url , json:true},(error, response) =>{
        if(error){
            callback('Unable to connect to weather services',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location. Try another search!',undefined)
        }  
        else{
            callback(undefined, {
                description: response.body.current.weather_descriptions[0],
                current_temp: response.body.current.temperature,
                feels_like : response.body.current.feelslike 
            })
        }  
    })
}
    // forecast(37.8267,-122.4233, (error,data) =>{
    //     console.log('Error',error)
    //     console.log('Response', data)
    // })

module.exports = forecast    