const form = document.getElementById("form");
const userInputField = document.getElementById("userInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const genre = document.querySelector("#genre");
  const theme = document.querySelector("#theme");
  const playerSupport = document.querySelector("#support");
  localStorage.setItem("genre", genre.value);
  localStorage.setItem("theme", theme.value);
  localStorage.setItem("playerSupport", playerSupport.value);
  readLocalStorage();
});
// do something with the user input

// Looking for the submit button
// submitButton.addEventListener('click', function () {
//   console.log(`Genre: ${genre}`);
//   console.log(`Theme:  ${theme}`);
//   console.log(`Player Support: ${playerSupport}`);
//   event.preventDefault();
// });

// Fetch API
fetch(
  "https://api.rawg.io/api/games?key=22ce0db615454079b7ab7a9a3d5d3c7c&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=50"
)
  .then((response) => response.json())
  .then((data) => {
    const games = data.results;
    console.log(games);
  })
  .catch((error) => console.log(error));

const readLocalStorage = function () {
  const genre = localStorage.getItem("genre");
  const theme = localStorage.getItem("theme");
  const playerSupport = localStorage.getItem("playerSupport");
  console.log(genre, theme, playerSupport);
};
