cl = console.log

class Instructor {
    constructor({ name, role = 'assistant' }) {
      this.name = name;
      this.role = role;
    }

    renderDetails() {
        //instance method
        cl(`${this.name}: ${this.role}`)
    }
}

    const maud = new Instructor({name: 'Maudlin Oxalis'});
    cl(maud.name)
    maud.renderDetails()

    const adam = new Instructor({name: 'Adam Viray', role: 'adam'})
    adam.renderDetails()

    cl(adam)
    // can't find adam? hope you have good documentation or IDE

    