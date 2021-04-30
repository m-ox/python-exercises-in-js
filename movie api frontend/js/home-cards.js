import { notRealDatabase } from '/js/notrealdb.js';

// transfer of mock db test
let db = notRealDatabase
console.log(db)

// This generates only the top 8 movies in the db currently

const cardLoader = (db) => {

  for (let i = 0; i < 8; i++) {
    const {id, title, summary, poster} = db[i]
    const container = document.createElement('div');
    container.innerHTML = `
    <div class="card" style="background-image: url(${poster}")>
      <a id=${id} onclick='clickCard(this.id)' href="view-movie.html">
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

cardLoader(notRealDatabase)