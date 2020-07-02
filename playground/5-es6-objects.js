//Object property shorthand 

const name = "Megha"
const user_age = 25

const user ={
    name,
    user_age,
    location: 'Boston'
}

console.log(user)

//Object destructuring

const product = {
    label: "Red notebook",
    price:22,
    stock :3,
    salePrice : undefined
}

// const label = product.label
// const price = product.price

// console.log(label)
// console.log(price)

// const {label : product_label,price=10,rating=5} = product
// // rename the variable name 
// console.log(product_label)

// // keep tha name as is 
// console.log(price)

// //default for rating & default for price is 10
// console.log(rating)

// Way 1 to write the code
// const transaction = (type, myproduct) =>{
//     const {label} = product
//     console.log(label)
// }

// transaction('order', product)


// New way of writing
const transaction = (type, {label,stock,price:the_price} ) =>{
    console.log(label,stock,the_price)    
}
transaction('order_is', product)