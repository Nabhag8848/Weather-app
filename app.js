// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Sec Timer')
// },2000)

// setTimeout(()=>{
//     console.log('Zero Sec Timer')
// },0)

// console.log('Stopping')
const geoCode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const address = process.argv[2]

if(!address){
   return console.log("Please Provide Address!")
}

geoCode(address, (error,data) => {

      if(error){
          return console.log(error)
      }

    forecast(data.longitude,data.latitude, (error, forecastData) => {

        if(error){
            return console.log(error)
        }

        console.log(data.placename)
        console.log(forecastData)
    })
})