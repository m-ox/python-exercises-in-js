const slowCounting = () => {

//    var index; 
//
//    for (index = 0; index < 21; index++) {
//        console.log(index);
//        
//    }
//}

    for (let index = 1; index < 21; index++) {
        setTimeout(() => {
            console.log(index)
        }, 500 * (index + 1))
    }
}

//slowCounting()

    const wait = ms => {
        return new Promise((resolve, reject) => setTimeout(resolve, ms) )
    }

    // async
    // await


async function slowCounter () {

    for (let index = 1; index < 21; index++) {
        setTimeout(() => {
            console.log(index)
        }, 500 * (index + 1))
    }
}

slowCounter()