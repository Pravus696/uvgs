// global variables for use in javascript file

const form = document.getElementById("form");
const userInputField = document.getElementById("userInput");
const carouselInner = document.querySelector(".carousel-inner");
let carouselItems;
const carousel = document.getElementById("carousel");
let currentIndex = 0;

// form submition
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // variables from form for fetch request
  const genre = document.querySelector("#genre");
  const platform = document.querySelector("#platform");
  const playerSupport = document.querySelector("#support");
  const key = "22ce0db615454079b7ab7a9a3d5d3c7c";
  // fetch request
  fetch(
    `https://api.rawg.io/api/games?key=${key}&page_size=50&parent_platforms=${platform.value}&genres=${genre.value}&tags=${playerSupport.value}`
  )
    .then((response) => response.json())
    .then((data) => {
      const games = data.results;
      console.log(games);
      // checking for return in array
      if (games.length === 0) {
        const error = document.getElementById("error");
        error.textContent = "Sorry we couldn't find a game with those options.";
      } else {
        // if there's a return, clears previous error then adds div with background image
        error.textContent = "";
        for (let i = 0; i < games.length; i++) {
          const carouselItem = document.createElement("div");
          const carouselImg = document.createElement("img");
          if (games[i].background_image) {
            carouselImg.src = games[i].background_image;
          } else {
            carouselImg.src =
              "https://www.google.com/imgres?q=cat%20funny%20picture&imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F02%2F64%2F67%2F50%2F360_F_264675017_KixwrUsOmFWKQHhIVXDDKxDlxYUvlEhv.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dfunny%2Bcats&docid=hXkGIAj9K8OhZM&tbnid=9sb0D2gi89uYMM&vet=12ahUKEwjuh-rjlPOHAxX2k4kEHY_uDwgQM3oECFEQAA..i&w=579&h=360&hcb=2&ved=2ahUKEwjuh-rjlPOHAxX2k4kEHY_uDwgQM3oECFEQAA";
          }
          // assigns class to created item
          carouselItem.classList.add("carousel-item");
          // appends created items to html
          carouselInner.appendChild(carouselItem);
          carouselItem.appendChild(carouselImg);
        }
      }
      console.log(games);
      console.log(carouselInner);
    })
    // making the first created item visible
    .then(() => {
      carouselItems = document.querySelectorAll(".carousel-item");
      console.log(carouselItems[currentIndex]);
      carouselItems[currentIndex].style.display = "block";
    })
    // display error if one happens
    .catch((error) => {
      console.log(error);
    });
  console.log(`Genre: ${genre.value}`);
  console.log(`Platforms: ${platform.value}`);
  console.log(`Player Support: ${playerSupport.value}`);
});

// buttons from html
const nextBtn = document.querySelector(".carousel-control-next");
const prevBtn = document.querySelector(".carousel-control-prev");

// go to next item in carousel
nextBtn.addEventListener("click", () => {
  carouselItems[currentIndex].style.display = "none";
  currentIndex = (currentIndex + 1) % carouselItems.length;
  carouselItems[currentIndex].style.display = "block";
});

// go back to previous item in carousel
prevBtn.addEventListener("click", () => {
  carouselItems[currentIndex].style.display = "none";
  currentIndex =
    (currentIndex - 1 + carouselItems.length) % carouselItems.length;
  carouselItems[currentIndex].style.display = "block";
});
