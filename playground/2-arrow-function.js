


// const square= function(x){
//     return x*x
// }

// const square = (x) => {
//     return x*x
// }

// shorthand function 
// if more complexity, can't use this
//const square = (x) => x*x
//working : 

//console.log(square(2))

const event = {
    name:'bday party ',
    guestList: ['Megha','Jiya','Honey'],
    printGuestList() {
        console.log('Guest list for ' +this.name )        
        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name )
        })
    }
}
event.printGuestList()
