const form = document.getElementById("form");
const userInputField = document.getElementById("userInput");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const genre = document.querySelector("#genre");
  const platform = document.querySelector("#platform");
  const playerSupport = document.querySelector("#support");
const key = "22ce0db615454079b7ab7a9a3d5d3c7c";
  fetch(
    `https://api.rawg.io/api/games?key=${key}&dates=2019-09-01,2019-09-30&platforms=18,1,7&page_size=50&genres=${genre.value}&parent_platforms=${platform.value}&${playerSupport.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const games = data.results;
      console.log(games);
    })
    .catch((error) => {
      console.log(error);
    });

  console.log(`Genre: ${genre.value}`);
  console.log(`Platforms: ${platform.value}`);
  console.log(`Player Support: ${playerSupport.value}`);
  localStorage.setItem("genre", genre.value);
  localStorage.setItem("theme", theme.value);
  localStorage.setItem("playerSupport", playerSupport.value);
  readLocalStorage();
});