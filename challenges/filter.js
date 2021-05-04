const array = [1, 2, 3, 1, 2, 4]
const deleters = [1, 2];
result = []

//for (i in array) {
//    
//    result = array.slice(1, 2)
//    console.log(result)
//}

//for (i in array) {
//    result = array.filter(num => num = deleters[i]);
//}
//
//console.log(result);

function removeByValue(arr, ...valuesToRemove){

    const pulled = arr.filter(value => {
        return !valuesToRemove.includes(value)
    })

    arr.length = 0
    pulled.forEach(value => arr.push(value))

    return arr
}

console.log(removeByValue(['a', 'b', 'c', 'a', 'b'], 'a', 'c'))