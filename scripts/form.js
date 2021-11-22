import axios from "axios";
const url = "/comment/create";
const data = { title: "example" };

window.addEventListener("load", myFunction);

function myFunction() {
  axios
    .post(url, data)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error.message);
    });
}
