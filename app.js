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

geoCode('Veraval ,Gujarat', (error,data) => {
      console.log('Error:',error)
      console.log('Data:',data)
})

forecast(70.37,20.9, (error, data) => {
    console.log('Error:', error)
    console.log('Data:', data)
})