"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
/*const noButton = document.querySelector(".btn--no");*/
const catImg = document.querySelector(".cat-img");
const pidginButton = document.querySelector(".btn--pidgin");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

pidginButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeYesButton();
    updatePidginButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleYesClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("yes");
  pidginButton.style.display = "none";
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  yesButton.style.fontSize = `${newFontSize}px`;

}

function generateMessage(noCount) {
  const messages = [
    "No",
    "You go regret am oo",
    "Abeg na, my baby",
    "You no go like pick yes?:)",
    "Baby'm biko!!!",
    "This na your last chance oo...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `cat-${image}.jpg`;
}

var no = document.getElementById("no");
var noTexts = ["You think say you wise", "You sure?", "Pookie biko!", "No do me like this nau :(", "You wan break my heart like this?", "I'm go soon cry"];
no.addEventListener("click", change);

function change() {
    var randomIndex = Math.floor(Math.random() * noTexts.length);
    var randomText = noTexts[randomIndex];
    no.innerText = randomText;

    var i = Math.floor(Math.random() * 1000) + 1;
    var j = Math.floor(Math.random() * 700) + 1;
    no.style.left = i + "px";
    no.style.top = j + "px";
}

function updatePidginButtonText() {
  pidginButton.innerHTML = generateMessage(noCount);
}
