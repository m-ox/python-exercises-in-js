const cl = console.log
const prompt = require('prompt-sync')()

// #*********************************************************
// # 1)
// # Given a list of integers, create a new list ranged from 0 to 20
// # omitting the numbers from the original list.
// # EX: [1, 3, 5] => [0, 2, 4, 6, 7, 8, 9, 10.....]

const arr = [1, 3, 5, 8, 12, 19]

function NumOmitter(selected) {
    const range = [...Array(21).keys()].slice(1)
    //cl('our full range', range)

    // FAILED FOR OF LOOP METHOD
    // for (num of range) {
    //     cl('our num', num)

    //     if (selected.includes(num)) {
    //         cl('included num in range', num)
    //         const toBeSpliced = range.indexOf(num)
    //         cl('index of num in range', toBeSpliced)
    //         range.splice(toBeSpliced, (toBeSpliced + 1))
    //         cl('new range', range)
    //     }
    // }

    // PASSING FOR OF LOOP METHOD
    // for (num of selected) {
    //     if (range.includes(num)) {
    //         const toBeSpliced = range.indexOf(num)
            
    //         range.splice(toBeSpliced,(toBeSpliced + 1))
    //     }
    // }

    // FILTER ARRAY WITH ARRAY METHOD
    const filteredArr = range.filter(num => {
        return selected.indexOf(num) === -1
    })

    return filteredArr

    // MAP OVER SELECTED VALUES METHOD
    // selected.map(num => {
    //     if (range.includes(num)) {
    //         const toBeSpliced = range.indexOf(num)
            
    //         range.splice(toBeSpliced,(toBeSpliced + 1))
    //     }
    // }
    // )

    //return range

}

// let prompty = prompt('What numbers would you like to use? >> ')
//                 .split(' ')
//                 .map(Number)
//cl(prompty)

//cl('Our new range:', NumOmitter(prompty))


// #*********************************************************
// # 2)
// # Write a program that separates each character of a string by a hyphen.
// # Each character should accumulate based on the current iteration count.
// # The start of each accumulated value should be capitalized. 
// # IE:  "abcd" => "A-Bb-Ccc-Dddd"
// # "RqaEzTy" => "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"

prompty = prompt('What string do you want to mangle? >> ')
            .replace(' ', '')

cl(prompty)

function stringMangler(str) {
    const res = str
                    .toLowerCase()
                    .split('')
                    .map((el, i) => {
                        // cl('the el:', el, '| the iterator:', i)
                        // cl(
                        //     typeof(el.split(''))
                        // )
                        // const res = []
                        // res.push(el.repeat(i + 1))
                        // cl(typeof(res))
                        // const firstLetter = res.shift()
                        // cl('first letter:', firstLetter, 'rest of word:', res)
                        // firstLetter.toString().toUpperCase()
                        // cl(firstLetter.concat(res).concat('-'))

                        cl(el, i)

                        // save char
                        const char = el
                        // capitalize char
                        let mangle = ''.concat(el.toUpperCase())
                        // repeat * iteratable
                        mangle = mangle.concat(el.repeat(i)).concat('-')
                        cl(mangle)

                        return mangle
                    })

    cl(res.join('').slice(0,-1))
}

stringMangler(prompty)

// #*********************************************************
// # 3)
// # Write a program that generates a random hexadecimal color value
// # Hex values are up to 6 character combinations from the values A-Z and numbers 0-9,
// # and prefixed by "#"
// # EX. #FFFF54, #1235FH, #000458, etc...
