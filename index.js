chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!

  const urlElement = document.getElementById("url");
  urlElement.innerHTML = url;

  const qrImg = document.querySelector("#qrImg");
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
});
