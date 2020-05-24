const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

let config = {
  frame: process.env.NODE_ENV !== "production" ? true : false,
  webPreferences: {
    nodeIntegration: true,
  },
};

// Listen for app to be ready
app.on("ready", function () {
  mainWindow = new BrowserWindow(config);

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "mainWindow.html"),
      protocol: "file",
      slashes: true,
    })
  );
});
