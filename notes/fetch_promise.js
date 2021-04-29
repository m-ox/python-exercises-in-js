// how to communicate with outside APIs
cl = console.log

cl('Starting fetch call')
const postsPromise = fetch('https://api.dailysmarty.com/posts')
// fetch was built to have a promise built inside
cl('After fetch call')
cl(postsPromise)
cl('After program has run')

// asyncrynous processing - you want to be able to call this API
// without stopping the rest of the application

// 'fetch' doesn't give you the whole API json data
// it only brings back a promise
// it's useful to confirm there was success and creating a switch or whatever after

postsPromise
            .then(data => data.json())
            .then(data => {
                cl(data); // at this step, post id and title are returned
                data.posts.forEach((item) => { // this parses the data to 'posts'... 'guides' would be what we would use if we were looking for guides... you need to access the right data!
                    cl(item.title) // this parsed the items to next access item of 'title'
                }) 
            // then is the natural consequence of success on a promise
            // fetch can be used with any kind of data so need to be more specific
            // .json converts that data from the promise to json
            // checking with cl step by step helps know what to access next
            })
            
            .catch((err) => {
                cl(err) // this returns a generic TypeError: Failed to fetch
            })

var films;
const swapiPromise = fetch("https://www.swapi.tech/api/films")

await swapiPromise // have to run js as module for await to work
            .then(data => data.json() )
            .then(data => films = data)
            .then(() => console.log("From Fetch: ", films)) // within the scope loads
            .catch(err => console.error(err))

console.log("From Global: ", films) // too slow and returns undefined
// nevermind, we just ddos'd swapi on accident