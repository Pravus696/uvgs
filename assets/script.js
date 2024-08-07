const genre = document.getElementsByID('#genre');
const theme = document.getElementsByID('#theme');
const playerSupport = document.getElementsByID('#playerSupport');

// Looking for the submit button
submitButton.addEventListener('click', function () {
  console.log(`Genre: ${genre}`);
  console.log(`Theme:  ${theme}`);
  console.log(`Player Support: ${playerSupport}`);
  event.preventDefault();
});

// Fetch API
fetch('https://api.rawg.io/api/games?key=22ce0db615454079b7ab7a9a3d5d3c7c&dates=2019-09-01,2019-09-30&platforms=18,1,7')
  .then(response => response.json())
  .then(data => console.log(data)); // data is the object that we get from the API
then(data => {
  const games = data.results;
  console.log(games);
})
  .catch(error => console.log(error));