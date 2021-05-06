const phrase = 'this is a sentence'

function titleCaser(str) {
    let x = str.split(' ')
    let res = x.map(word => {
        word = word.charAt(0).toUpperCase() + word.slice(1)
        return word
    })
    return res
}

console.log(titleCaser(phrase))