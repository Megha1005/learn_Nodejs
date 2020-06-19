//Single reusable function for geocode

const request = require('request')

const geocode = (address,callback) =>{
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoibWVnaGFhYiIsImEiOiJja2F1YXp0Z3kweHVkMnJyMmw2b2t0bnJ0In0.O87dRfkl4UZbjuiJRp0TWw&limit=1'
    request({url :url , json:true},(error, response) =>{
        if(error){
            callback('Unable to connect to location services')
        }
        else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search!')
        }  
        else{
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude:response.body.features[0].center[1],
                location:response.body.features[0].place_name
            })
        }  
    })
}
    // geocode('Philadelphia', (error,data) =>{
    //     console.log('Error',error)
    //     console.log('Response', data)
    // })

module.exports = geocode    