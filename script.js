const button = document.querySelector(".generateButton");
const jokeParagraph = document.querySelector("p");
button.addEventListener("click", async function () {
  //   console.log("You clicked on the button");
  //   console.dir(jokeParagraph);
  const config = { headers: { Accept: "application/json" } };
  const joke = await axios.get("https://icanhazdadjoke.com/", config);
  //   console.dir(joke.data.joke);
  document.querySelector("p").innerHTML = joke.data.joke;
});
