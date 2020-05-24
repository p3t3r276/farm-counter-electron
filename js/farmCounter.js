const electron = require("electron");
const url = require("url");
const path = require("path");

const BrowserWindow = electron.remote.BrowserWindow;

$(function () {
  $("#setFarm").on("click", function () {
    createAddWindow();
  });
});

function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Set farm item",
  });
  addWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "setFarmWindow.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  // Handle garbage collection
  addWindow.on("close", function () {
    addWindow = null;
  });
}
