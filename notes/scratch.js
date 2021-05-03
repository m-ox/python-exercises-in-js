/*
1. Write a function that generates a random hexadecimal color code.
 - A hex value is up to a 6 character combination made up of the values a-f and 0-9, prefixed with a `#`
2. Write a function that takes a string and returns the letters in alphabetical. order
3. Write a function that takes in an object and prints all of the values inside of the given object
4. Create a class called Student that accepts a name, email, and favorite programming language. You should have at least 2 instance methods and 2 static methods. Instantiate the Student class and invoke each method.
*/

//1 random hex color

const randomHexColor = () => {

    let letters = 'abcdef0123456789'.split('');
    //console.log(letters)
    let color = '#';
        for (i = 0; i < 6; i++ ) {
            color += letters[Math.round(Math.random() * 15)];
        }
        return color;
    }

console.log('A random color:', randomHexColor())

//2 fix a string

const stringDetangle = (word) => (
    word.split('')
        .sort()
        .join('')
)

console.log('Detangled word:', stringDetangle('rasputin'))

//3 print all values inside of given object

const duck = {
    color: 'yellow',
    material: 'rubber',
    floats: 'yes'
}

const objectViewer = (obj) => {

    keys = Object.keys(obj)
    values = Object.values(obj)
    result = []

    for (i = 0; i < keys.length; i++) {
        result += keys[i] + ': '
        result += values[i] + '\n'
    }

    return `The item appears:\n` + result
}

console.log(objectViewer(duck))

//4 Create a class called Student that accepts a name, email, and
//favorite programming language. You should have at least 2 instance
//methods and 2 static methods. Instantiate the Student class and invoke
//each method.

class Student {
    constructor(name, email, favlang) {
        this.name = name;
        this.email = email;
        this.favlang = favlang;
    }

    static checkGrades() {
        let grade = 'ABCDF'.split('');
        let result = 'F';
        result = grade[Math.round(Math.random() * 4)];
        console.log('Your grade is:', result)
    }

    static findCoffee() {
        console.log('Every student needs coffee:\nhttps://www.bing.com/search?q=coffee+near+me')
    }

    speak() {
        console.log(`Hello, my name is ${this.name}! My favourite language is ${this.favlang}. :D`)
    }

    readEmail() {
        console.log(`${this.name} goes to login to their ${this.email}...\nThere was a lot of spam. `)
    } 
}

const adam = new Student('Adam', 'adam@adamland.net', 'python3')

const maud = new Student('Maud', 'maud@adamland.website', 'HolyC')

maud.speak()
adam.readEmail()
Student.checkGrades()
Student.findCoffee()

/*
// Intro to JavaScript
How do you declare and initialize variables in JavaScript? - use "var, const, or let" to name and instantiate a variable and then you can assign a value to it with =
What is JavaScript hoisting? - hoists up variables lower than when they are called
List 3 JavaScript data types. - string, number, array
What is a switch statement, and how would you use one? - like a network switch; you line out cases of a situation to direct where the flow of processing goes
What is a ternary operator? - shorthand for checking whether the value of something is true or false
What is a function? - block of code designed to perform a particular task
What is the "this" keyword in JavaScript? - refers to within "this object's scope"
List 3 types of JavaScript loops. - for loop, for while, do while

// Modern JavaScript
Explain the const variable. - it cannot be reassigned like let or var; shares similar "local" styled scope with let
What syntax do you use for modern string interpolation in JavaScript? like this: `hello this is an ${object}`
Explain an arrow function and how you might use one. - the easiest/simplest way to perform a function - great for starting up a function, plugging in some parameters, and then doing stuff quick
What is array destructuring? - taking an array and extracting values from it and reassigning it elsewhere
What is the JavaScript spread operator and what is it used for? - ... - used for going a level deeper in an object and accessing those values
What is Variable Deconstruction in JavaScript? - I'm not sure what that is but you can assign values to variables when deconstructing arrays
How does the “this” keyword work with arrow functions? - it inherits the scope of the arrow function's parent
How do you pass JavaScript objects as function arguments by leveraging deconstruction? - using curly brackets around it
What is a JavaScript Promise? - contains both the producing code and calls to the consuming code
What is a JavaScript fetch Promise and how might you use it? - guarantees your program a result when making an API request
What is async and await in JavaScript and what purpose do they serve? - await stops the function process until it receives what it needs; async was created to run a function asynchronously
What is error handling in a JavaScript async/await function, and how might you use it? - while creating outcomes for a promise, we can throw an error in a catch statement
What is lodash? - handy js library that has a lot of extra functionality that you can install with npm
What is the JavaScript Debugger? - can throw a "debugger" in your code and it helps pause and track errors in your code while the devtools are open - when combined with an awaited f
How do you create a custom error class in JavaScript? - create a class for your custom error, extend the prototype.Error function and pass its attributes with super in the constructor of your custom class, then add your own custom message or name or whatever you want
What is npm? - node package management - helps install libraries 
What is Node? - an asynchronous js back end run time environment
*/