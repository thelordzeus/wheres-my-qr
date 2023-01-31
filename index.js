chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  let url = tabs[0].url;
  // use `url` here inside the callback because it's asynchronous!

  const urlElement = document.getElementById("url");
  urlElement.innerHTML = url;

  const generateBtn = document.querySelector("#generateBtn");
  const qrImg = document.querySelector("#qrImg");

  generateBtn.addEventListener("click", () => {
    if (!url) return;
    console.log("Button clicked");
    generateBtn.innerHTML = "Generating QR code";
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
    qrImg.addEventListener("load", () => {
      generateBtn.innerHTML = "Generate QR code";
    });
  });
});
