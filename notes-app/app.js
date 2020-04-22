// const validator = require('validator')

const notes = require ('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')

//const command = process.argv[2]

//console.log(process.argv)
//Customize yargs version
yargs.version('1.1.0')

//add,remove,read,list
//Create add command
yargs.command({
    command:'add',
    describe:'Add a New Note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    builder:{
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'
        }
    },

    handler: function(argv) {
        console.log('Title: '+argv.title)
        console.log('Body:' +argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'Remove a note',
    handler:function(){
        console.log('Removing the note')
    }
})

yargs.command({
    command:'list',
    describe:'List the notes',
    handler:function(){
        console.log('Listing out all the notes')
    }    
})

yargs.command({
    command:'Read',
    describe:'Read the notes',
    handler:function(){
        console.log('Reading the notes')
    }
})


//console.log(yargs.argv)  

yargs.parse()
// if(command ==='add'){
//     console.log('Adding note')
// } else if(command==='remove'){
//     console.log('Removing node')
// }
// const msg = notes()
// console.log(msg)

// // //console.log(validator.isEmail('megha@example.com'))
// // console.log(validator.isURL('htps/mead.io'))

// // npm lib : chalk 
// // npm install chalk@2.4.1
// // install 2.4.1 of chalk
// //use it to print the string "Success! " in console with the green text

// //const greenmsg = chalk.green.bold('Success!')
// const greenmsg = chalk.bold.green.inverse('Success!')
// //console.log(chalk.green('Success!'))
// console.log(greenmsg) 


// console.log(process.argv[2])