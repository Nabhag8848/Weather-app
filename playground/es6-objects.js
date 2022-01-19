// object shorthand property

const Name = 'Nabhag'
const userAge = 19

const user = {

    Name,
    age: userAge,
    location:'Veraval'
}

console.log(user)

// object destructuring

const product = {

    label:'RedChief',
    price:5000,
    stock:1,
    rating:4.3
}

// const label = product.label
// const price = product.price

const {label:productLabel, price, rating = 5,sizeAvailable = 10} = product

console.log(productLabel, price, rating, sizeAvailable)

const transaction = (type, {label, stock}) => {
    console.log(type, label, stock)
}

transaction('order',product)