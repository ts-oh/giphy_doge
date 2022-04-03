const imgEl = document.querySelector("#img-container");
const btn = document.querySelector("button");
const loading = document.querySelector("#loading");

function loadingOutput() {
  loading.textContent = "fetching doge gif...";
}

function doneLoading() {
  loading.textContent = "";
}

function errorOutput() {
  loading.textContent = "Error fetching data!!!";
}

async function doge() {
  try {
    const response = await fetch(
      "https://api.giphy.com/v1/gifs/translate?api_key=BirTwq2uwFKufaHchWxto6oZwXlGyhdM&s=doge",
      {
        mode: "cors",
      }
    );
    const result = await response.json();
    imgEl.childNodes[3].src = result.data.images.original.url;
    imgEl.childNodes[3].alt = result.data.title;
    imgEl.childNodes[3].onload = doneLoading();
  } catch (error) {
    errorOutput();
  }
}

btn.addEventListener("click", () => {
  loadingOutput();
  doge();
});
