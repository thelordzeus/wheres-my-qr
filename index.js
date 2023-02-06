chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!
  const qrImg = document.querySelector("#qrImg");
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
});

// why this button not working idk

const BUTTON = document.querySelector("button");
const IMG = document.querySelector("img");

const toggleFullScreen = () => {
  IMG.requestFullscreen();
};

BUTTON.addEventListener("click", toggleFullScreen);
