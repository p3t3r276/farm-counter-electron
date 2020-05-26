const electron = require("electron");
const { ipcRenderer } = electron;

document.querySelector("form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  const item = document.querySelector("#itemName").value;
  console.log(ipcRenderer);
  ipcRenderer.send("item:set", item);
}
