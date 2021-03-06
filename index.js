document.getElementById("toDisplay").addEventListener("submit", (e) => {
  e.preventDefault();
  let theText = e.target.firstElementChild.value;
  let theTextBox = e.target;

  document.body.style.overflow = "hidden";
  theTextBox.className = "col-12";

  let textPart1 = document.createElement("div");
  let textPart2 = document.createElement("div");
  textPart1.innerHTML = theText;
  textPart2.innerHTML = theText;
  textPart1.style.position = "absolute";
  textPart2.style.position = "absolute";

  theTextBox.innerHTML = "";
  theTextBox.append(textPart1);
  theTextBox.append(textPart2);
  theTextBox.style.height = "100vh";
  theTextBox.style.fontSize = "30vw";

  textPart1.classList = "floatingText1";
  textPart2.classList = "floatingText2";

  textPart1.style.cursor = "none";
  textPart2.style.cursor = "none";
  theTextBox.style.cursor = "none";

  startWakeLock();
});

async function startWakeLock(){
  try {
    const wakeLock = await navigator.wakeLock.request("screen");
  } catch (error) {
    console.log(error.name, error.message);
  }
}