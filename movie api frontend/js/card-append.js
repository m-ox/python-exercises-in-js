import { notRealDatabase } from '/js/notrealdb.js';

// transfer of mock db test
//let db = notRealDatabase
//console.log(db)

// this loads all movies in db

const cardLoader = (db) => {

  for (let i = 0; i < db.length; i++) {
    const {title,summary,poster} = db[i]
    const container = document.createElement('div');
    container.innerHTML = `
    <div class="card" style="background-image: url(${poster}")>
      <a href="view-movie.html">
          <div class="card-content">
              <h2 class="card-title"> ${title} </h2>
              <p class="card-body"> ${summary} </p>
          <a href="#" class="button">Read more...</a>
          </div>
      </a>
    </div>
    `;
    document.getElementById("card-gallery").appendChild(container)
  }
}

//cardLoader(notRealDatabase)

//transfers clicked movie id to next page... ideally
const clickables = document.getElementsByClassName("card")
window.clickables = clickables
console.log(clickables)

function getId(e) {
    console.log(e.target.id)
}

Array.from(clickables).forEach(item => {
    item.addEventListener("click", getId)
})

console.log(Array.from(clickables))