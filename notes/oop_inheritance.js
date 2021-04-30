class Person{
    constructor({name, age}){
      this.name = name
      this.age = age
    }
  
    greeting(){
      return `Hello, ${this.name}`
    }
  }
  
  class Student extends Person{
    constructor(gradeLevel, personObj){ //was able to pass in Person object and get all its arguments!
      super(personObj);
  
      this.gradeLevel = gradeLevel
    }
  
  }
  
  
  const ryan = new Student(12, {name: "Ryan", age: 33})
  
  console.log(ryan.greeting())