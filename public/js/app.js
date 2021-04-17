console.log("Client side javascript file is loaded!");

const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");
const spinner = document.querySelector(".lds-ripple");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;

  spinner.classList.remove("hidden");
  messageOne.textContent = "";
  messageTwo.textContent = "";

  fetch("/weather?address=" + location).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        messageOne.textContent = data.error;
        messageTwo.textContent = "";
        spinner.classList.add("hidden");
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecast;
        spinner.classList.add("hidden");
      }
    });
  });
});
