// using bind function
const userOne = {
    firstName: "Maud",
    lastName: "Oxalis"
}

const userTwo = {
    firstName: "Adam",
    lastName: "Viray"
}

// function way of 'binding'
const fullName = function() {
    return `${this.lastName}, ${this.firstName}`
}

// functional way of binding object details
const maudlin = fullName.bind(userOne)//? Oxalis, Maud
const adam = fullName.bind(userTwo)//? Viray, Adam

// why you cannot use an arrow function
//const fullName = () => {
//    return `${this.lastName}, ${this.firstName}`
//}
// this returns undefined when binding


// WHAT?

//class People{
//    constructor(name, role){
//        this.name = name
//        this.role = role 
//    }
//
//    setName(newName){
//        this.name = newName
//
//        return this.name
//    }
//}
//
//class Student extends People{
//    constructor(){
//        super()
//
//        console.log(this)
//        this.checkThis = this.checkThis.bind(this)
//    }
//
//    checkThis = () => { // the arrow function elevates the scope into parent
//        return this
//    }
//}
//
//const maud = new Student("Maudlin", student)

// 'this' is used to be accessible through a whole object, global
// 'bind' is used to make the object have all the 'permissions" throughout the whole object