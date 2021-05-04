cl = console.log
// ARRAY METHODS FOR JS

// concat
// a method to join two existing arrays

cat = 'meow'
dog = 'woof'
result = cat.concat(dog)

cl(`Concat: ${result}`)

// constructor
// a property that returns a constructor fx

cl(`Constructor: ${cat.constructor}`)

// copyWithin
// copies array el to another position in the arr, overwriting the og array

fruits = ['apple', 'orange', 'banana']
// turns to 'apple', 'banana', 'banana' below
cl(`copyWithin replaced orange: ${fruits.copyWithin(1,2)}`)

// entries
// creates an Array Iterator object with k/v pairs

candy = ['chocolate', 'fruity', 'chalky', 'gummy']
candyList = candy.entries()

for (val of candyList) {
    result += val.join(',')
}

cl(`Entries iterated and joined: ${result}`)

// every
// checks all el in arr if they pass provided func; returns T or F

bees = ['Candace', 'Clarence', 'Buzz', 'William']

function beesC(bee) {
    return bee.charAt(0)
}

function everyBee() {
    return bees.every(beesC)
}

cl(`These are bees: ${bees}`)
cl(`Returns true if every bee's name starts with C: ${everyBee()}`)

// fill
// fills an array with specificed elements

shoppingBag = ['emptiness']

result = shoppingBag.fill('groceries')

cl(`The bag has: ${result}`)

// filter
// creates an array that passes a testing function

cl(`These bees have names longer than 7 letters: ${bees.filter(bee => bee.length > 7)}`)

// find 
// returns the value of the FIRST ELEMENT IN AN ARRAY that goes through a passing func

fishies = ['rainbow', 'cutthroat', 'sucker', 'sturgeon', 'paddlefish']

cl(`Fish bigger than 7 letters: ${fishies.find(fishies => fishies.length > 7)}`)

// findIndex
// NOTABLY returns index of the first element that passes a testing function - don't bother trying to check from strings equalling with this one

cl(`Finding index of previous fish: ${fishies.findIndex(fishies => fishies.length > 7)}`)

// forEach
// calls a function once for each el in an arr, in order

betterFish = fishies.forEach(fishy => console.log(fishy))

// from
// returns an arr object from any object with a length property or iterable obj

jam = 'pepper'

cl(`Forced array from string: ${Array.from(jam)}`)

// includes
// checks whether an array has an el - returns T or F

jelly = ['strawberry', 'blueberry', 'boisenberry', 'chokecherry']
cl(`Do I have chokecherry for my frikadellen? ${jelly.includes('chokecherry')}`)

// indexOf
// NOTABLY can search for a string in an array and returns the position

cl(`Where is the chokecherry in the cupboard? i:${jelly.indexOf('chokecherry')}`)

// isArray
// checks whether obj is an array - notably must bind to Array! obj to return T or F

cl(`${Array.isArray(jelly)}`)

// join
// joins an array together to create a string - can also include a separator

cl(`${jelly.join(', ')}`)

// keys
//  returns an Array Iterator object with the keys of an array

plants = ['oxalis', 'dandelion', 'salsify', 'black medic']
plKeys = plants.keys() // creates an iterable obj
end = []

for (plant of plKeys) {
    end += plant + ' '
}

cl(`Count for each plant key: ${end}`)

// length
// no need for ()s, this presents the length of an array

cl(`Length of plant arr: ${plants.length}`)

// lastIndexOf
// searches an arr for specific item and returns position --
// returns position of last occurence

cl(`Indexed position of salsify: ${plants.lastIndexOf('salsify')}`)

// map
// iterates over an arr with a function to create a new arr - SUPER HANDY!

biggerPlants = plants.map(plant => plant.toUpperCase())
cl(`Map to make bigger plants! ${biggerPlants}`)

// pop
// removes the last el of an arr and returns that el

dangerLentil = plants.pop()
cl(`Dangerous lentil? >> ${dangerLentil}`)

// push
// add new entries to the end of an arr, and returns the new length

plants.push('helonias', 'chickweed')
cl(plants)

// reduce
// reduces an array/obj to a single value... it executes a provided function
// for EACH VALUE of the array from L to R - similar to map
// similar to a for loop or map, what makes it stand out is the accumulator val

function reducing() {
    let nums = [1, 2, 3, 4, 5]
    cl('Starting array:', nums)

    let sum = nums.reduce((accumulator, val, index) => {
        result = accumulator + val;
        console.log(`Current accumulator total: ${accumulator} Current index: ${index}`)
        return result
      });

    return sum
}

cl(reducing())

// reduceRight
// same as above but does the accumulating R to L

function reducingRight() {
    let nums = [1, 2, 3, 4, 5]
    cl('Starting array:',nums)

    let sum = nums.reduceRight((accumulator, val, index) => {
        result = accumulator + val;
        console.log(`Current accumulator total: ${accumulator} Current index: ${index}`)
        return result
      });

    return sum
}

cl(reducingRight())

// reverse
// simply reverses the order of an array

bugs = ['ant', 'grasshopper', 'worm', 'moth', 'rolly polly']

function bugReverser (arr) {
    
    cl('Array as is:', arr)
    return arr.reverse()
}

cl('Arr after:', bugReverser(bugs))

// shift
// Remove the first item of an array - kind of like pop for the front
// returns shifted off value

function bugAdder (arr) {
    return arr.shift()
}

cl('Stolen bug:', bugAdder(bugs))
cl('New bug list:', ...bugs)

// slice
// returns the selected elements in an array as a new array obj

function firstBugStealer (arr) {
    return arr.slice(0, 1) 
}

cl(firstBugStealer(bugs).toString())

// some
// similar to every in the sense it checks all els in arr and returns T or F depending
// it ceases to continue checking once it reaches one True and thus will return True

ages = [15, 44, 56, 102]
cl('Ages of applicants:', ...ages)

function oldEnough (age) {
    return age >= 75
}

check = () => {
    return ages.some(oldEnough)
}

cl('Someone is too old to drive:', check())

// sort
// simply sort an array... it can be alpha or numeric

sorty = () => {
    return ages.sort()
}

cl('The ages from earlier but sorted:', ...sorty())

// splice
// adds or removes items to or from an arr, and returns removed
// kind of gorey, I guess

splicy = () => {
    return ages.splice(0, 1)
}

cl(`We have removed the following old people:\nApplicant // Age: ${splicy()}`)
cl(`Remaining applicant ages:`, ...ages)

// toString
// turns an arr into a string, with the help of commas

function whoCaresAtThisPoint() {
    return ages.toString()
}

cl('*shrugs* It is a string now. >>', whoCaresAtThisPoint())

// unshift
// remember shift? it's the opposite where we add new items to the front of an arr

function newApplicantAges() {
    ages.unshift(92, 31, 57)
    return ages
}

cl('We added more ages:', newApplicantAges().join(', '))

// valueOf
// unsurprisingly, this reveals the values of an arr... it is the same
// this is the default of the array object

cl('Throwback to this array\'s values:', ...fruits.valueOf())