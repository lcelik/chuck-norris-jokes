const API_URL = "http://api.icndb.com/jokes";

const jokeForm = document.getElementById("jokeForm");
const jokeText = document.getElementById("jokeText");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const photo = document.getElementById("chuckImg");

jokeForm.addEventListener("submit", (event) => {
  event.preventDefault();

  //   console.log("clicked the button"); //testing if it works
  //   console.log(firstName.value);

  const firstName =
    firstNameInput.value === "" ? "Chuck" : firstNameInput.value;
  const lastName = lastNameInput.value === "" ? "Norris" : lastNameInput.value;

  axios
    .get(`${API_URL}/random?firstName=${firstName}&lastName=${lastName}`)
    .then((response) => {
      //   console.log(response.data.value.joke);

      jokeText.innerText = response.data.value.joke;
    });
});
