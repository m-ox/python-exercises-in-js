const age = 5

function toHumanYears(n) {
    if (typeof(n) === "number") {
        let humage = 0

        //The first year of a dog’s life is equal to 15 human years.
        n -= 1
        humage += 15

        if (n === 0) {
            return humage
        }

        //The second year of a dog’s life is equal to about nine human years.
        n -= 1
        humage += 9

        if (n === 0) {
            return humage
        }

        //Each additional year is equal to about four or five human years. I will do five.
        while (n > 0) {
            n -= 1
            humage += 5
        }

        return humage
    }
    else {
        return 'a zillion'
    }
}

console.log(`This dog was born ${age} years ago...`)
console.log(`So this dog is ${toHumanYears(age)} human years old.`)