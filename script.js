const API_URL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=1579f730f521b6fbcb0e75d591a6a108&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API =
    'https://api.themoviedb.org/3/search/movie?api_key=1579f730f521b6fbcb0e75d591a6a108&query="';

const form = document.getElementById("form");
const search = document.getElementById("search");
// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
    const res = await fetch(url);
    const data = await res.json();
    // showMovies(data.result);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = search;
    if (searchTerm && searchTerm !== "") {
        getMovies(SEARCH_API + searchTerm);
        search.value = "";
    } else {
        window.location.reload();
    }
});