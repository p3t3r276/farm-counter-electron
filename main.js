const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;
let setFarmWindow;

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

  mainWindow.on("closed", function () {
    app.quit();
  });
});

ipcMain.on("setFarm:open", createSetFarm);

function createSetFarm() {
  setFarmWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: "Set farm item",
    ...config,
  });
  setFarmWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "setFarmWindow.html"),
      protocol: "file:",
      slashes: true,
    })
  );
  // Handle garbage collection
  setFarmWindow.on("close", function () {
    setFarmWindow = null;
  });
}

ipcMain.on("item:set", function (e, item) {
  mainWindow.webContents.send("item:set", item);
  setFarmWindow.close();
});
