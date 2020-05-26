const electron = require("electron");

const { ipcRenderer } = electron;

$(function () {
  $("#setFarm").on("click", function () {
    ipcRenderer.send("setFarm:open");
  });
});

ipcRenderer.on("item:set", function (e, item) {
  $("#itemName").text(item);
});
