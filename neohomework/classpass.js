// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    let arr = S.split('')
    let bcheck = false

    for (let i = 0; i < arr.length; i++) {

        let letter = arr[i]

        // check if b has arrived
        if (letter == 'b' && bcheck == false) {
            bcheck = true
        }

        // check if a has arrived after a b
        if (letter == 'a' && bcheck == true) {
            return false
        }

    }

    // if nothing catches, we return true
    return true
}