// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Sec Timer')
// },2000)

// setTimeout(()=>{
//     console.log('Zero Sec Timer')
// },0)

// console.log('Stopping')

const request = require('request')

// const url = 'http://api.weatherapi.com/v1/current.json?key=934151fed33d42c99b485037220201&q=Morbi'

// request({url: url,json:true},(error, response)=>{
//     const current = response.body.current 
//     console.log('It is Currently',current.temp_c,'degrees out. There is',current.cloud,'% chance of rain')

// })


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/London.json?access_token=pk.eyJ1IjoiZGV2ZWxvcGVydHdpdHRlciIsImEiOiJja3k2M3ppcTAwc2FsMnBwcXN0dzA5OHI3In0.KuPw6FbND3nSuG3sOZRBSQ'

request({url: url, json:true},(error, response) =>{

    if(error){
        console.log('Cannot connect to Weather Service!! Try Again Enabling your Internet!')
    }else if(response.body.features.length === 0){
        console.log('Cannot find Location please Search and Try Again!')
    }else{
        console.log(response.body.features[0].center[0]); 
    }
})  









