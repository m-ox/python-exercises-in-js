cl = console.log

// a handy way to group promises together
// promise.all

const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops');
});

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating login...');
    reject('Error updating login...');
})

const loginActivities = Promise.all([greeting, updateAccount])

loginActivities
            .then(res => { // res returns data of these resolved statements
            res.forEach(activity => {
                console.log(activity)
            })  
        })