strTrimmer = (...stringThing) => {

    if (stringThing.length > 2) {
        return stringThing.slice(1, -1)
    } else {
        throw new Error("Array is too small!")
    }

}

console.log(strTrimmer([1, 2 , 3, 4, 5]))