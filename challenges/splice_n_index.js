const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let numOne = arr
                .splice(arr
                .indexOf(Math.min(...arr)), 1)
                [0]

let numTwo = arr
                .splice(arr
                .indexOf(Math.min(...arr)), 1)
                [0]

console.log(numOne + numTwo)