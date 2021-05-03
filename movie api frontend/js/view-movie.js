import { notRealDatabase } from '/js/notrealdb.js';
import { clickCard } from '/js/click-card.js';

// transfer of clicked movie id test
let clicked = clickCard() // this needs to return a numbered index value

// transfer of mock db test
let db = notRealDatabase
console.log(db)


const movieLoader = (db) => {

    const {id, title, release, summary, starring, rating, poster} = db[1]// change to clicked index value
    const container = document.createElement('div');
    container.innerHTML = `
        <div class="feature-movie-wrapper">

            <div class="movie-title-wrapper">
                <h1>${title}</h1>
            </div>

            <div class="movie-content-wrapper">
                <div class="movie-poster-wrapper">
                    <img src="${poster}" alt="movie poster">
                </div>

                <div class="movie-details">

                    <div class="movie-summary">
                        <h4>Summary:</h4>
                        <p>${summary}</p>
                    </div>
                    <br>
                    <div class="movie-rating">
                        <h4>Movie Rating:</h4>
                        <p>${rating}</p>
                    </div>
                    <br>
                    <div class="starring-actor">
                        <h4>Starring:</h4>
                        <p>${starring}</p>
                    </div>
                    <br>

                    <div class="change-entry-wrapper">
                        <p>Need to change this entry?</p>
                        <div class="edit-delete-wrapper">

                            <div class="edit-wrapper">
                                <button id="edit-button" class="header-button other-highlight" onClick="location = 'edit-movie.html'">Edit</button>

                            </div>
                            <div class="delete-wrapper">
                                <button id="edit-button" class="header-button other-highlight" onClick="location = 'delete-movie.html'">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

       document.getElementsByClassName("main-content")[0].appendChild(container)
}

movieLoader(db)