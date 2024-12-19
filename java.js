const messages = [
  "oi", 
  "eu tenho um presente pra vc", 
  "achei muito fofo o presente q vc me deu hj", 
  "e queria retribuir o presente",
  "so que eu to com um pouquinho de vergonha",
  "entao so abra quando estiver sozinha ok?"
];

const textElement = document.getElementById("text");
const buttonContainer = document.getElementById("buttonContainer");
const flowersContainer = document.querySelector(".flowers");
const body = document.querySelector("body");

let currentMessageIndex = 0;

function typeMessage(message, index = 0, callback) {
  if (index < message.length) {
      textElement.textContent += message[index];
      setTimeout(() => typeMessage(message, index + 1, callback), 100);
  } else if (callback) {
      setTimeout(callback, 500);
  }
}

function typeEffect() {
  if (currentMessageIndex < messages.length) {
      typeMessage(messages[currentMessageIndex], 0, () => {
          textElement.textContent += "\n";
          currentMessageIndex++;
          typeEffect();
      });
  } else {
      buttonContainer.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("animateButton");

  button.addEventListener("click", () => {
      // Aplica fade-out no texto e no botão
      textElement.style.opacity = "0";
      button.style.opacity = "0";

      // Esconde os elementos após o fade-out
      setTimeout(() => {
          textElement.style.display = "none";
          button.style.display = "none";
          body.classList.remove("not-loaded");
          flowersContainer.style.display = "block"; // Exibe flores
      }, 500); // Tempo da transição
  });
});

typeEffect();