let jokeTitle = document.querySelector(".joke-element");
let jokeAnswer = document.querySelector(".joke-answer");
let answerBtn = document.querySelector("#btnAnswer");
let nextBtn = document.querySelector("#btnNextJoke");

const JOKE_URL = `https://v2.jokeapi.dev/joke/Programming`;

const getJokes = async () => {
  try {
    let response = await fetch(JOKE_URL);
    let result = await response.json();

    // Check if the joke is valid before displaying it
    if (result && result.setup && result.delivery) {
      jokeTitle.innerText = result.setup;

      // Hide the answer initially
      jokeAnswer.innerText = "";

      answerBtn.addEventListener("click", () => {
        jokeAnswer.innerText = result.delivery;
      });
    } else {
      // If no joke / display a fallback message
      jokeTitle.innerText = "Sorry, no joke available at the moment.";
      jokeAnswer.innerText = "";
    }
  } catch (error) {
    jokeTitle.innerText = "Network error, please try again later.";
    jokeAnswer.innerText = "";
  }
};

nextBtn.addEventListener("click", () => {
  getJokes();
});

window.addEventListener("load", () => {
  getJokes();
});
