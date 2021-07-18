// find the length of a string

const word = 'circumbivilgination'
//console.log({ 'length of word': word.length})

// take list of words and return the longest one:

const listy = ['egg', 'chicken', 'worm', 'seed']
let longy = ''

for (let i in listy) {
    const scrut = listy[i]

    if (scrut.length > longy.length) {
        longy = scrut
    }
};

//console.log('the longest word:', longy)

// swap the first and last characters in a string

const cat = 'kitty'
const cl = console.log

function switcheroo(word) {
    let arr = word.split("")

    first = arr.splice(0,1)
    last = arr.splice(-1)

    const res = last.concat(arr).concat(first).join('')
    return res

}

// cl('a switched around word:', switcheroo(cat))

// Replace all occurrences of the first letter in a string with '$' EXCEPT for the first letter itself.
// EX: "racecar" => "raceca$"
//     "retrofit" => "ret$ofit"
//     "talkative" => "talka$ive"
//     "bobby" => "bo$$y"

function dollarydoo(word) {
    
    let arr = word.split('')
    let special = arr.splice(0,1)
    
    let res = special

    for (let letter of arr) {

        if (letter === special[0]) {
            res.push('$')
        } else {
            res.push(letter)
        }
    }

    res = res.join('')

    return res
    
}

cl(dollarydoo('talkative'))