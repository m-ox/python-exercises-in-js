class Instructor {
    constructor({ name, role = "assistant" }) {
      this.role = role;
      this.name = name;
    }
  
    // Instance method
    renderDetails() {
      console.log(`${this.name} - ${this.role}`);
    }
  
    // Base case static method
    static helloWorld() {
      return 'Hi there'
    }
  
    // Static method - that can be used!
    static canTeach(instructor) {
        return (instructor.role === 'classroom') // return true or false
    }
  }
  
let jon = new Instructor({ 'name': 'Jon'})
//jon.helloWorld() // static methods need to be called with the class
console.log(
    `${jon.name} can teach: ${Instructor.canTeach(jon)}`
)

let alice = new Instructor({ 'name': 'Alice', role: 'classroom'})
console.log(
    `${alice.name} can teach: ${Instructor.canTeach(alice)}` // canTeach is usable
)

let maud = new Instructor({ 'name': 'Maud'})
console.log(
    `${maud.name} says: ${Instructor.helloWorld()}` // canTeach is usable
)

console.log(Instructor.helloWorld())