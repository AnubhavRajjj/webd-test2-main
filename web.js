function backchange(newColor) { 
	document.bgColor = newColor;
}
const API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const path = "https://image.tmdb.org/t/p/w1280";
const find =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const first = document.getElementById("film");
const f = document.getElementById("form");
const s = document.getElementById("search");

showMovies(API);
function showMovies(url){e
    fetch(url).then(res => res.json())
    .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
        const el = document.createElement('div');
        const image = document.createElement('img');
        const text = document.createElement('h2');

        text.innerHTML = `${element.title}`;
        image.src = path + element.poster_path;
        el.appendChild(image);
        el.appendChild(text);
        first.appendChild(el);
    }); 
});
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    first.innerHTML = '';
     
    const searchTerm = search.value;

    if (searchTerm) {
        showMovies(find + searchTerm);
        search.value = "";
    }
});