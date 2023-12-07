const guessBtn = document.getElementById("guessButton");
const answer = Math.floor(Math.random() * 100);

const victoryBgm = document.getElementById('victorySound')
const gameoverBgm = document.getElementById('gameoverSound')
const wrongBgm = document.getElementById('wrongSound')

let guessCount = 7;

guessBtn.addEventListener("click", () => {
  const invalidPopUp = new bootstrap.Modal(
    document.getElementById("invalidModal")
  );
  const tooHighPopUp = new bootstrap.Modal(
    document.getElementById("tooHighModal")
  );
  const tooLowPopUp = new bootstrap.Modal(
    document.getElementById("tooLowModal")
  );
  const congratsModal = new bootstrap.Modal(
    document.getElementById("congratsModal")
  );
  const gameOverModal = new bootstrap.Modal(
    document.getElementById("gameOverModal")
  );

  let input = parseFloat(document.querySelector("#guessInput").value);

  if (isNaN(input) || input < 0 || input > 100) {
    invalidPopUp.show();
    document.getElementById("guessInput").value = "";
  } else {
    if (guessCount === 1) {
      guessCount = 7;
      document.querySelector("#guessCount").innerHTML = guessCount;
      document.getElementById("guessInput").value = "";
      gameOverModal.show();
      gameoverBgm.play();
    } else {
      if (input > answer) {
        guessCount--;
        tooHighPopUp.show();
        wrongBgm.play();
        document.querySelector("#guessCount").innerHTML = guessCount;
        document.getElementById("guessInput").value = "";
      } else if (input < answer) {
        guessCount--;
        document.querySelector("#guessCount").innerHTML = guessCount;
        tooLowPopUp.show();
        wrongBgm.play();
        document.getElementById("guessInput").value = "";
      } else if (input === answer) {
        guessCount = 7;
        document.querySelector("#guessCount").innerHTML = guessCount;
        congratsModal.show();
        victoryBgm.play();
        document.getElementById("correctNumber").innerHTML = `${answer}`;
        document.getElementById("guessInput").value = "";
      }
    }
  }
});
