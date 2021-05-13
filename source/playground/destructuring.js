


const person = {
    name: 'samuel',
    age: 36,
    location: {
        city: 'los angeles',
        temp: 70
    }
};
console.log(`${person.name} is ${person.age}`)

//  Destructuring
//old way 
// const name = person.name;
// const age = person.age;
// console.log(`${name} is ${age}`)

// new way
const { name: fname = 'Anonymous', age } = person;
console.log(`${fname} is ${age}`)

const { city, temp } = person.location;
console.log(`its ${person.location.temp} in ${person.location.city}`)
console.log(`its ${temp} in ${city}`)


//  Challenge

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self Published'} = book.publisher

// console.log(publisherName); //Penguin or self published


//  Array destructuring

const address =['1299 S Juniper Street', 'Philly', 'Penn', '19147'];
console.log(`you are in ${address[1]}, ${address[2]}`)

// const [street, cityArr, state, zip] = address;
// console.log(street, cityArr, state, zip);

const [, cityArr, state,] = address;
console.log(`you are in ${cityArr}, ${state}`);

//  Challenge

const item =['Coffe-hot', '$2.00', '$2.50', '$2.75']

const [coffee, ,medium] = item;

console.log(`A medium ${coffee} is ${medium}`)