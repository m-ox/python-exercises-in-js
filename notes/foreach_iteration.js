const animals = {
    tiger: '🐅',
    cat: '🐱',
    monkey: '🐒',
    elephant: '🐘'
};

// iterate over object values
// Object.values(animals).forEach(val => console.log(val));

//const keys = Object.keys(animals)
//console.log(keys)

// iterate over object
//keys.forEach((key) => {
//    console.log(`${key}: ${animals[key]}`);
//    console.log(animals['tiger'])
//});

console.log(Object.values(animals))

values = Object.values(animals)

values.forEach( val => {
    console.log("hehe")
})

let entries = Object.entries(animals)

console.log(entries)

Object.entries(animals).forEach( ([key, val]) => {
    console.log(`${key}: ${val}`)
})

// `forEach()` method
Object.entries(animals).forEach(([key, value]) => {
    console.log(`${key}: ${value}`)
});