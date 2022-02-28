const apiUrl = "https://icanhazdadjoke.com/";
var currentJoke = undefined;

function getJoke() {
    document.querySelector(".rate-joke-wrapper").style.display = "none";
    let jokeOutput = document.querySelector(".display-joke-content");
    fetch(apiUrl, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        },
      })
        .then((results) => results.json())
        .then((data) =>{
        currentJoke = data;
        jokeOutput.innerHTML = currentJoke?.joke;
        })
        .catch((error) => console.log(error));
}
