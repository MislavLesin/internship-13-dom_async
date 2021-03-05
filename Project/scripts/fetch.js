const apiUrl = "https://icanhazdadjoke.com/";


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
        .then((data) => jokeOutput.innerHTML = data?.joke)
        .catch((error) => console.log(error));

}
