var jokesList = [];

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
    id: currentJoke.id,
    content: currentJoke.joke,
    rating: button.innerHTML,
  };
  jokesList.push(joke);
  sortJokes();
  displayJokes();
  document.querySelector(".rate-joke-wrapper").style.display = "none";
  getJoke();
  localStorage.setItem("jokes", JSON.stringify(jokesList));
}

function loadJokesFromLocalStorage() {
  let savedJokes = JSON.parse(localStorage.getItem("jokes"));
  if (savedJokes == null) return true;
  for (let i = 0; i < savedJokes.length; i++) {
    jokesList.push(savedJokes[i]);
  }
  displayJokes();
}

function displayJokes() {
  if (jokesList.length == 0) {
    document.querySelector(".saved-jokes-section").innerHTML = "";
    return true;
  }
  const section = document.querySelector(".saved-jokes-section");
  section.innerHTML = "";
  for (let i = 0; i < jokesList.length; i++) {
    section.innerHTML += getJokeHtml(jokesList[i]);
  }
}

function getJokeHtml(joke) {
  return `  <div class="saved-joke">
  <p>${joke.content}</p>
      <div class="saved-joke-button-wrapper">
        <button class="delete-joke-button" onclick="deleteJoke(this)">Delete</button>
        <div class="saved-joke-rating-wrapper">
          <label>Rating:</label>
          <p>${joke.rating}/10</p>
        </div>
      </div>
</div>`;
}

function deleteJoke(button) {
  let  promise = new Promise((resolve) => {
    let decision =   confirm("Are you sure you want to delete this joke?");
    resolve(decision);
  });
  promise.then((decision) => {
    if(decision == true){
      const deleteButtons = document.querySelectorAll(".delete-joke-button");
      for (let i = 0; i < deleteButtons.length; i++) {
        if (Object.is(deleteButtons[i], button) == true) {
          jokesList.splice(i, 1);
        }
      }
      displayJokes();
      localStorage.removeItem("jokes");
      if (jokesList != undefined && jokesList.length > 0) {
        localStorage.setItem("jokes", JSON.stringify(jokesList));
      }
    }
  })
}

function sortJokes() {
  if (jokesList.length < 2) return true;

  jokesList.sort(function (a, b) {
    return b.rating - a.rating;
  });
}

function logout() {
  localStorage.removeItem("jokes");
  localStorage.removeItem("username");
  localStorage.removeItem("password");
  window.location.href = "./register.html"
}