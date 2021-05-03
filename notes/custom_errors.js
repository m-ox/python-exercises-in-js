class ComponentError extends Error {
    constructor (...args) {
      super(...args);

      this.name = 'componentError' // IT HAS TO BE NAME!
    }
  }

  function siteComponent(func) {
    try {
      return func();
    } catch(e) {
      throw new ComponentError('siteComponent is borked!\n >>> ' + e)

    }
    
  }

  widget = () => {
    return '<div> Success! </div>';
  }

  //throw new componentError('It\'s doing something weird!')

  console.log(siteComponent("widget"));