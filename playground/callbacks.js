setTimeout(() =>{
    console.log("Two Seconds Up!")
},2000);

const name = ['Kunal','Danny','Nabhag','John']
const Names = name.filter((Name) => {
    return Name[1] === 'a'
})
console.log(Names)

const geoCode = (address,callback) => {

    setTimeout(() => {
        const data = {
            latitude:0,
            longitude:0
        }
    
        callback(data)    
    },2000)
}

geoCode('India',(data) =>{
    console.log(data) 
})


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (a,b,callback) =>{

    setTimeout(() =>{
        callback(a + b)
    },2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

