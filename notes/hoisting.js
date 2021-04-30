var user = {
    name: 'Maud',
    age: 25,
    city: 'Missoula',
    favourites: {
        color: 'blue',
        plant: 'oxalis triangularis',
        yogurt: 'icelandic'
    }
};

console.log("Hello my name is", user.name, "and my favourite plant is the", user.favourites.plant);
// let age = 25; // no changey
// console.log(age);

/*
var name, city, age;
name = 'Adam';
city = 'Chicago';
age = '25';
*/

/*function updateVar(){
    age = 80
    console.log("function:", age)
}

console.log("global:", age)
updateVar()
console.log("global: ", age) */

// hoisting a bubble to pop in console
bubble = 'pop'

// below is not hoisted... initializing and declaring at the same time does not hoist
//console.log(age);
//var age = 15;

var user = {
    name: 'Maud',
    age: 25,
    city: 'Missoula',
    favourites: {
        color: 'blue',
        plant: 'oxalis',
        yogurt: 'icelandic'
    }
}

//console.log(user.favourites.plant);