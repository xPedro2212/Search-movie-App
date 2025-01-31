//TMDB

const API_KEY = 'api_key=5c49c76eccb1884e8e6eb7d7806e16e6';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&'+API_KEY;
const IMG_URL = 'https://image.tmdb.org/t/p/w500';


getMovies(API_URL); // chama a função getMovies e passa a url da api
function getMovies(url){ // função que pega os filmes
    fetch(url).then(res => res.json()).then(data => { // pega a url e transforma em json
        showMovies(data.results); // chama a função showMovies e passa o array de filmes
    })
}

function showMovies(data){ // função que mostra os filmes
    main.innerHTML = ''; // limpa o main
    data.forEach(movie => { // cada filme no array de filmes
        const {title, poster_path, vote_average, overview} = movie; // pega o titulo, imagem, nota e sinopse do filme
        const movieEl = document.createElement('div');// cria um elemento div para passar as informações do filme
        movieEl.classList.add('card'); // adiciona a classe card ao elemento div
    movieEl.innerHTML = `      
    <div class="card">
            <img src="${IMG_URL+poster_path}" alt="${title}"> ${/* adiciona a imagem do filme */''}
            <div class="card-info">
                <h2>${title}</h2> ${/* adiciona o titulo do filme */''}
                <span class="${getColor(vote_average)}">${vote_average}</span> ${/* adiciona a nota do filme */''}
            </div>

            <div class="description">
                <h3>Sinopse</h3>
                <p>${overview} </p> ${/* adiciona a sinopse do filme */''}
            </div>
        </div>`; // adiciona o html ao elemento div com as informações do filme
        main.appendChild(movieEl); // adiciona o elemento div ao main, mostrando o filme
    });
}

function getColor(vote){ 
    if(vote >= 8){ // se a nota do filme for maior ou igual a 8
        return 'green'; // retorna a cor verde
    }else if(vote >= 5){ // se a nota do filme for maior ou igual a 5
        return 'orange'; // retorna a cor laranja
    }else{ // se a nota do filme for menor que 5
        return 'red'; // retorna a cor vermelha
    }
}// função que pega a cor da nota do filme}








