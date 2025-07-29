const openDialogButtons = document.querySelectorAll(".gallery__item-button");
const closeDialogButton = document.querySelector(".dialog__close");
const dialog = document.querySelector(".dialog");

// YouTube Iframe API setup

let player;

function onYouTubeIframeAPIReady() {
  player = new YT.Player("player");
}

function stopVideo() {
  if (player) {
    player.stopVideo();
  }
}

function playVideo() {
  if (player) {
    player.playVideo();
  }
}

// Event listeners for dialog

openDialogButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dialog.showModal();
    playVideo();
  });
});

closeDialogButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("close", () => {
  stopVideo();
});
