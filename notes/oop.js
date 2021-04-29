cl = console.log

class Instructor {
    // constructor function's purpose is all the processes you want to happen each time a new object using this class is created
    constructor({ name }) { // objects are in curly
        this.name = name // this.name is different object from 'name'
    }
}

// time to instantiate
const maud = new Instructor({ name: 'maud'}) // pass object into class with same property

// vocab
// maud is "instance of objector"
// 

cl(maud)

// two ways of doing it below
// first one passes an object

class Account {
    constructor({username, password}) {
        this.username = username
        this.password = password
    }
}

const userObj = {name: "maud", password: "secret"}

const user = new Account (userObj)

// second one with just strings
//class Account {
//    constructor(username, password) {
//        this.username = username
//        this.password = password
//    }
//}
//
//const user = new Account ("maud", "secret")