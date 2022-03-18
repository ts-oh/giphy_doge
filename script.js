const imgEl = document.querySelector("#img-container");
const btn = document.querySelector("button");
const loading = document.querySelector("#loading");
const image = document.querySelector("#gif-image");

async function doge() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=eQwrIRtmL1edzZSCv155iDwpBliMnEb1&s=doge",
    {
      mode: "cors",
    }
  ).catch((err) => console.log(err));

  const result = await response.json();
  imgEl.childNodes[3].src = result.data.images.original.url;
  imgEl.childNodes[3].alt = result.data.title;
  imgEl.childNodes[3].onload = doneLoading();
}

function loadingOutput() {
  loading.textContent = "fetching doge gif...";
}

function doneLoading() {
  loading.textContent = "";
}
btn.addEventListener("click", () => {
  loadingOutput();
  doge();
});

//image.onload(doneLoading());
