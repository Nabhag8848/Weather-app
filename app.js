// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Sec Timer')
// },2000)

// setTimeout(()=>{
//     console.log('Zero Sec Timer')
// },0)

// console.log('Stopping')

const request = require('request')

const url = 'http://api.weatherapi.com/v1/current.json?key=934151fed33d42c99b485037220201&q=London'

request({url: url,json:true},(error, response)=>{
    const current = response.body.current
    console.log('It is Currently',current.temp_c,'degrees out. There is',current.cloud,'% chance of rain')

})









