const apiKey = '5ae0dfdd';

async function movie(url){
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.Search);
        const par = document.querySelector('.par');
        par.innerText = '';
        if (data.Search) {
            data.Search.forEach(movie => {
                
                const movieDiv = document.createElement('div');
                movieDiv.classList.add('movie');
                movieDiv.innerHTML = `
                    <h3>${movie.Title} (${movie.Year})</h3>
                    <p>Type: ${movie.Type}</p>
                    <p>IMDB ID: ${movie.imdbID}</p>
                    <img src="${movie.Poster}" alt="${movie.Title} Poster">
                `;
                
                par.appendChild(movieDiv);
            });
        } else {
            par.innerText = 'No movies found.';
        }
    } catch(err){
        console.log(err);
    }
}

function act(value){
    const mov = `https://www.omdbapi.com/?apikey=${apiKey}&s=${value}`;
    movie(mov);
}

const input = document.querySelector('.input');
const searcBtn = document.querySelector(".srch")
searcBtn.addEventListener('click', function(){
    const deyer = input.value.trim(); 
    if (deyer !== "") {
        act(deyer);
    } else {
        const par = document.querySelector('.par');
        par.innerText = ''; 
    }
});
