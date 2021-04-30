// how to handle error handling

async function queryApis() {
    try {
    const postsPromise = fetch('https://api.github.com/users/c-masque/repos')
    const posts = await postsPromise.then(res => res.json())
    console.log("Maud's repos: ", posts)
}   catch(err) {
    console.log(err);
    console.log('There was an error with the github API')
}
    try {
    const postsPromise2 = fetch('https://api.github.com/users/jordanhudgens/repos')
    const posts2 = await postsPromise2.then(res => res.json())
    console.log("Jordan's repos: ", posts2)
}   catch(err) {
    console.log(err);
    console.log('There was an error with the github API')
} 
    
}

console.log(queryApis())