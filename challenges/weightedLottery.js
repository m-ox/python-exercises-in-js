// random values

    //const weights = {
    //    winning: 1,
    //    losing: 1000
    //}

// if we call this function and pass in the weights,
// we are expecting to only win 1 to 1000 losses

    //weightedLottery(weights)

// but more importantly, the object needs to be flexible...
// can have different weights and results...

// pass in weights into a function and you should get a 'random' result

const theseAreWeights = {
    red: 5,
    blue: 5,
    yellow: 1
}

const weightedLottery = weights => {
    //let total = []

    //console.log(weights)
    //let wKeys = weights.keys()

    //const num = Math.floor(Math.random() * 100)
    // add a value to an array for each weight then randomly pull an indexed value

    //for (weight in weights) {
    //    total += ('item' * weights.valufdssaggn)
    //}

    
    let containerArray = []

    Object.keys(weights) .forEach(key => {
        for (let i = 0; i < weights[key]; i++) {
            containerArray.push(key);
        }
    })

    return containerArray[(Math.random() * containerArray.length) | 0]

}

console.log(weightedLottery(theseAreWeights))


const weightedLotter = weights => {
    const arr = []
    console.log(Object.keys(weights).length)

    for (key in weights) {
        for (i = 0; i < weights[key]; i++) {
            arr.push(key)
        }
    }
    
    return arr[Math.floor(Math.random() * arr.length)]

}

    console.log(weightedLotter(theseAreWeights))