// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Sec Timer')
// },2000)

// setTimeout(()=>{
//     console.log('Zero Sec Timer')
// },0)

// console.log('Stopping')

// const url = 'http://api.weatherapi.com/v1/current.json?key=934151fed33d42c99b485037220201&q=Morbi'

// request({url: url,json:true},(error, response)=>{
//     const current = response.body.current 
//     console.log('It is Currently',current.temp_c,'degrees out. There is',current.cloud,'% chance of rain')

// })


const request = require('request')
const geoCode = require('./utils/geocode.js')

geoCode('Veraval ,Gujarat', (error,data) => {
      console.log('Error:',error)
      console.log('Data:',data)
})









