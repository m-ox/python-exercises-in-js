let sleepyGreeting = new Promise((resolve, reject) => { // promise needs two arguments
    setTimeout(() => {
        resolve('Hello...') // what happens if success
    }, 2000);

    setTimeout(() => {
        reject(Error('Too sleepy...')) //...and failure
    }, 2000);
})

sleepyGreeting
    .then(data => { // then expects access to the data //data is the hello or too sleepy string...
        console.log(data)
    })
    .catch(err => { // catch then catches the failure
        console.error(err)
    })