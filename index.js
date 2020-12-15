let inputArea = document.querySelector("#input");
let button = document.querySelector("#button");
let outputArea = document.querySelector("#output");

async function translate() {
  let proxy = "";
  let userInput = inputArea.value;
  // console.log(userInput);
  let url = "https://api.funtranslations.com/translate/pirate.json";
  try {
    let data = await fetch(
      `https://cors-anywhere.herokuapp.com/${url}?text= ${userInput}`
    );
    let result = await data.json();
    console.log(result);
    outputArea.innerHTML = result.contents.translated;
  } catch (err) {
    console.log(err);
    alert("Error");
  }
}

button.addEventListener("click", function () {
  // translate(inputArea.value);
  translate();
});
