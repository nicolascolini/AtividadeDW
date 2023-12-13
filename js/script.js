const API_KEY = 'ffb7cc00d42130c2da37e8c7940a035d'; 
const BASE_URL = 'https://api.themoviedb.org/3';
const API_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;

const main = document.getElementById('main');


function getMovies() {
    fetch(API_URL)
        .then(response => response.json())
        .then(data => showMovies(data.results))
        .catch(error => console.error('Erro ao obter filmes:', error));
}

function showMovies(movies) {
    main.innerHTML = '';

    movies.forEach(movie => {
        const { title, poster_path, overview } = movie;

        const adicionarFilme = document.createElement('div');
        adicionarFilme.classList.add('card');

        const img = document.createElement('img');
        img.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
        img.alt = title;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const titleEl = document.createElement('h3');
        titleEl.textContent = title;

        const overviewEl = document.createElement('p');
        overviewEl.textContent = overview;

        function excluirFilme(card) {
            card.remove();
        }
    
        const button = document.createElement('a');
        button.href = '#'; 
        button.textContent = 'Excluir';
        button.classList.add('button');
        button.addEventListener('click', () => {
            excluirFilme(adicionarFilme);
        });
    
        adicionarFilme.appendChild(button);
        adicionarFilme.appendChild(img);
        cardContent.appendChild(titleEl);
        cardContent.appendChild(overviewEl);
        cardContent.appendChild(button);
        adicionarFilme.appendChild(cardContent);

        main.appendChild(adicionarFilme);

        
        
    });
}


window.onload = getMovies;