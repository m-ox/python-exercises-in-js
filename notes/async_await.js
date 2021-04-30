console.log('Welcome to the login page')

// example of callback hell:

// user logs into system
    // verify credentials
        // redirect them to dashboard
            // update db to know it is logged in
                // api calls to bring user data...

const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...')
        }, 2000)
    }) // not worrying about adding a reject
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...')
        }, 2000)
    })
}

// we cram awaited functions in an async function
async function loginActivities() {
    const returnedLogin = await login() // calls login function and it will proceed only when the login resolves
    console.log(returnedLogin)

    const returnedUpdateAccount = await updateAccount()
    console.log(returnedUpdateAccount)
}

loginActivities()