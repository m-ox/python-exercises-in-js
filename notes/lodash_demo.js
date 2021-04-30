// Times - does a process a set number of times

randNumber = () => {
    return Math.round(Math.random() * 100) // nicely returns a random number within 5
}

const sampleNumbers = _.times(5, randNumber) // first paranthes is amount and the second is a function - note no ()s

console.log(sampleNumbers)

// Filter - call for attributes in a dictionary

const players = [
    {name: 'maud', color: 'blue'},
    {name: 'adam', color: 'green'},
    {name: 'cloudy', color: 'pink'},
    {name: 'jardi', color: 'purple'}
]

const colorPink = _.filter(players, player => {
    return player.color == 'pink';
})

console.log(colorPink)

// KeyBy - takes the values of the first element and assigns as keys

// use players[name,color] dictionary

const names = _.keyBy(players, 'name')

console.log(names)

// Reduce - reducing stuff to a value

const sum = _.reduce([1, 2, 3], function(total, num) {
    return total + num
})

console.log(sum)

const links = [
    "https://www.google.com",
    "https://www.twitter.com",
    "https://www.instagram.com"
]

const webLinks = _.reduce(links, function(content, link) {
    return `<a href='${link}'> ${link} </a> <br> ` .concat(content)
})

console.log(webLinks)

// Random generator - we used Math.random earlier but lowdash random is better

randNum = () => (
    _.random(1, 5)
)

console.log(randNum())