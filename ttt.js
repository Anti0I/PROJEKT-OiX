const WszystkieKomorki = document.querySelectorAll("div.komorka");
let currentPlayer = Math.random() < 0.5 ? "😊" : "😂";
let moveCount = 0;
let gameStop = false;

function victory() {
  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const k0 = document.querySelector("div.komorka[data-index='0']").innerHTML;
  const k1 = document.querySelector("div.komorka[data-index='1']").innerHTML;
  const k2 = document.querySelector("div.komorka[data-index='2']").innerHTML;
  const k3 = document.querySelector("div.komorka[data-index='3']").innerHTML;
  const k4 = document.querySelector("div.komorka[data-index='4']").innerHTML;
  const k5 = document.querySelector("div.komorka[data-index='5']").innerHTML;
  const k6 = document.querySelector("div.komorka[data-index='6']").innerHTML;
  const k7 = document.querySelector("div.komorka[data-index='7']").innerHTML;
  const k8 = document.querySelector("div.komorka[data-index='8']").innerHTML;
  const flattedGame = [k0, k1, k2, k3, k4, k5, k6, k7, k8];

  for (i of wins) {
    if (
      flattedGame[i[0]] === flattedGame[i[1]] &&
      flattedGame[i[1]] === flattedGame[i[2]] &&
      flattedGame[i[0]] !== "" //te puste cos szczerze to mnie zdenerwowalo
    ) {
      gameStop = true;
      return flattedGame[i[0]];
    }
  }
}

for (let komorka of WszystkieKomorki) {
  komorka.addEventListener("click", (event) => {
    if (komorka.innerHTML) return;
    if (gameStop === true) return;
    komorka.innerHTML = currentPlayer;
    moveCount++;
    if (currentPlayer == "😂") {
      currentPlayer = "😊";
    } else {
      currentPlayer = "😂";
    }
    let result = victory();
    if (result) {
      document.getElementById("EndGry").innerText = "Koniec wygrał " + result;
      document.getElementById("PlayAgain").classList.add("show");
    } else if (moveCount === 9) {
      document.getElementById("EndGry").innerText = "Remis";
      document.getElementById("PlayAgain").classList.add("show");
    }
  });
}
function PlayAgain() {
  location.reload();
}
