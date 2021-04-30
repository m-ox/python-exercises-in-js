const login = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('User logged in...');
      }, 4000);
    });
  }
  
  const updateAccount = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Updating last login...');
      }, 2000);
    });
  }
  
  async function loginActivities(login, updateAccount) { // pass in arguments of functions
    const returnedLogin = await login;
    console.log(returnedLogin);
  
    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
  }
  
  loginActivities(login(), updateAccount());
  // the above functions become closures while passed into loginActivities - another function