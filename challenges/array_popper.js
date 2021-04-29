class ArrayPopper {
    constructor(par) {
      this.arg = par; // apple is passed through this class like so
      this.atBeginning = true; // apple is assigned true to be at beginning
    }
  
    togglePopper() {
      this.atBeginning = !this.atBeginning; // whenever we call this method , it switches the value
      result = this.atBeginning ? this.par.pop() : this.par.shift(); // pop and shift remove first or last value and returns appropriate "next" item
      return result
    }
  }
  
  const list = new ArrayPopper(['apple', 'kiwi', 'orange', 'gauva', 'lime'])
  
  list.togglePopper();