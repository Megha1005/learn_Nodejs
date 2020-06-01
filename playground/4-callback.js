
// Working with callback functions

// Set timeout of 2 seconds
setTimeout(()=>{
    console.log('Two seconds Timeout')
},2000)

// creating an array of names & then using synchronus function filter onto it

const names = ['Raj', 'Jessica','Saloni' ]
const shortNames = names.filter((name) => {
    return name.length <= 4
})

// Asynchronus function callback

const geocode = (address,callback) => {
    setTimeout(()=>{
        const data = {
            latitude : 0,
            longitude : 0
        }
        callback(data)
    },2000)
}

geocode('Philadephia', (data)=>{
    console.log(data)
})


// Another function using setTimeout and Callback function for addition of two numbers after a timespan of 2 seconds

const add = (a,b,callback) => {
    setTimeout(()=>{
        const sum = {
            sum: a+b
        }
        callback(sum)
    },2000)
}
add(1,4,(sum) => {
    console.log(sum)
})