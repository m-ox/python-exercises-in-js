cl = console.log

const obj1 = {
    name: 'maud',
    age: '25'
}

const obj2 = {
    name: 'maud',
    age: '25'
}

// shallow comparison works here
// Lodash is a comparison libary and it goes deep in it's checking

const isEqual = (obj1, obj2) => {
    const obj1Keys = Object.keys(obj1)
    const obj2Keys = Object.keys(obj2)

    if (obj1Keys.length !== obj2Keys.length) {
        return false
    }

    for (let objKey of obj1Keys) {
        if (obj1[objKey] !== obj2[objKey]) {
            return false
        }
    }

    return true
}

obj1 === obj2 // these are not equal
// they are stored in different memory locations
// and different object names

cl(isEqual(obj1, obj2))