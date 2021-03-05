function getJokeFirstTime() {
  document.querySelector(".get-joke-button").style.display = "none";
  document.querySelector(".display-joke-container").style.display = "flex";
  getJoke();
}

function showRating() {
  document.querySelector(".rate-joke-wrapper").style.display = "block";
}
function hideRating() {
  document.querySelector(".rate-joke-wrapper").style.display = "none";
}

function saveJoke(button) {
  let joke = {
    id: 1,
    content: document.querySelector(".display-joke-content").innerHTML,
    rating: button.innerHTML,
  };
  console.log(joke);
}
