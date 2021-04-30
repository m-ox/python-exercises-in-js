//https://api.github.com/users/c-masque/repos
//https://api.dailysmarty.com/posts

async function queryApis() {
    const postsPromise = fetch('https://api.github.com/users/c-masque/repos')
    const posts = await postsPromise.then(res => res.json()) // res is response
    console.log(posts) // to see the 'posts'

    const postsPromise2 = fetch('https://api.github.com/users/jordanhudgens/repos')
    const posts2 = await postsPromise2.then(res => res.json()) // res is response
    console.log(posts2) // to see the 'posts'
}

console.log(queryApis())