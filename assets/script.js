const form = document.getElementById("form");
const userInputField = document.getElementById("userInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const genre = document.querySelector("#genre");
  const platforms = document.querySelector("#theme");
  const playerSupport = document.querySelector("#support");
const key = "22ce0db615454079b7ab7a9a3d5d3c7c";
  fetch(
    `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=50&genres=${genre.value}&parent_platforms=${platforms.value}&${playerSupport.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const games = data.results;
      console.log(games);
    })
    .catch((error) => {
      console.log(error);
    });

  //localStorage.setItem("genre", genre.value);
  //localStorage.setItem("theme", theme.value);
 // localStorage.setItem("playerSupport", playerSupport.value);
  console.log(`Genre: ${genre.value}`);
  console.log(`Platforms: ${platforms.value}`);
  console.log(`Player Support: ${playerSupport.value}`);
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
//const apikey = "https://api.rawg.io/api/games?key=22ce0db615454079b7ab7a9a3d5d3c7c"; 
// const searchQuery = 'video games';
// const apiURL = `${"https://api.rawg.io/api/platforms?key=22ce0db615454079b7ab7a9a3d5d3c7c"}&search=${searchQuery}@api_key=${"https://api.rawg.io/api/platforms?key=22ce0db615454079b7ab7a9a3d5d3c7c"}`;

// const imageUrl = 'https://api.rawg.io/api/platforms?key=22ce0db615454079b7ab7a9a3d5d3c7c';
// const gameImage = document.createElement("gameImage");
// gameImage.src = imageUrl;
// gameImage.onerror = function () {
//   gameImage.src = "https://via.placeholder.com/150";
// };
