import { notRealDatabase } from '/js/notrealdb.js';

//let db = notRealDatabase
//console.log(db)

// This generates only the top 8 movies in the db currently

const cardLoader = (db) => {

  for (let i = 0; i < 8; i++) {
    const {id, title, summary, poster} = db[i]
    const container = document.createElement('div');
    container.innerHTML = `
    <div id="${id}" class="card" style="background-image: url(${poster}")>
      <div href="view-movie.html">
          <div class="card-content">
              <h2 class="card-title"> ${title} </h2>
              <p class="card-body"> ${summary} </p>
          <a href="#" class="button">Read more...</a>
          </div>
      </div>
    </div>
    `;
    document.getElementById("card-gallery").appendChild(container)
  }
}

cardLoader(notRealDatabase)

//transfers clicked movie id to next page... ideally
const clickables = document.getElementsByClassName("card")
window.clickables = clickables
console.log(clickables)

//function getId(e) {
//    console.log("Here is the ID: " + e.target.id)
//}
//
//Array.from(clickables).forEach(item => {
//    item.addEventListener("click", getId)
//})

//console.log(Array.from(clickables))