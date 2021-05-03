rain = 12345

const arrayMaker = (rain) => (
    [...`${rain}`].map(e => parseInt(e))
)

console.log(arrayMaker(rain))