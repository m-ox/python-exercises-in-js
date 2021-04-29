list = [1, 2, 3, 4 , 5]
args = [2, 1]

const removeByIndex = (listy, remover, remover2) => {

    return listy
                .splice(remover, remover2)
}

console.log(removeByIndex(list, ...args))