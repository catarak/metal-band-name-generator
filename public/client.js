const fontOptions = ['black-dahlia', 'art-dystopia', 'burn-the-witch', 'guttural', 'maiden', 'squealer', 'tobacco'];
let nameContainer;
let generateButton;

window.addEventListener('DOMContentLoaded', async () => {
  nameContainer = document.getElementById("band-name");
  generateButton = document.getElementById("generate-button");
  fetchBandName();
  generateButton.onclick = fetchBandName;
});

async function fetchBandName() {
  const response = await fetch("/bandName");
  const data = await response.json();
  nameContainer.textContent = data.bandName;
  const fontName = fontOptions[Math.floor(Math.random()*fontOptions.length)];
  nameContainer.classList.remove(nameContainer.classList.item(1));
  nameContainer.classList.add(fontName);
}