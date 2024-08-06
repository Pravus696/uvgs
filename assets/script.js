const genre = document.getElementsByID('genre');
const theme = document.getElementsByID('theme');
const playerSupport = document.getElementsByID('playerSupport');

submitButton.addEventListener('click', function() {
  console.log('Genre: ', genre.value);
  console.log('Theme: ', theme.value);
  console.log('Player Support: ', playerSupport.value);


const gameSuggestion = {
    genre: 'Action',
    theme: 'Zombie',
    playerSupport: 'Single Player'
    };

    localStorage.setItem('gameSuggestion', JSON.stringify(gameSuggestion));
    renderMessage();
});

function renderMessage() {
  const gameSuggestion = JSON.parse(localStorage.getItem('gameSuggestion'));

  if (gameSuggestion === null) {
    return;
  }

  genre.textContent = gameSuggestion.genre;
  theme.textContent = gameSuggestion.theme;
  playerSupport.textContent = gameSuggestion.playerSupport;
}

 fetch ('22ce0db615454079b7ab7a9a3d5d3c7c') 
    .then(response => response.json())
    .then(data => console.log(data));