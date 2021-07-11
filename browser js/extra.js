const arr1 = ['cat', 'dog', 'bird',]
const arr2 = ['cat', 'dog', 'bird', 'horse']

function dataSetMaker (arrOne, arrTwo) {
    res = []

    arrOne.forEach()
    return arrOne.map((arrOne, i) => {
        if (arrOne === arrTwo[i]) {
            console.log('no')
        } else {
            res.push(arrOne)
            res.push(arrTwo[i])
            console.log(res)
        }
        //return res
    })
}

const inArray = (array, search) => {
    JSON.stringify(array).includes(JSON.stringify(search)) // this returns T or F
}

//console.log(dataSetMaker(arr1, arr2))

function arrayComb(arrOne, arrTwo) {
    const res = []

    arrOne.forEach(item => {
        arrTwo.forEach(i => {
            if(!inArray(res, [item,i])) res.push([item, i])

            if(!inArray(res, [item,i])) res.push([i, i])
        })
    })

    return res
}

console.log(arrayComb(arr1, arr2))