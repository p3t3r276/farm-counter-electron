const electron = require("electron");

const { ipcRenderer } = electron;
let runNum = 0;

$(function () {
  $("#setFarm").on("click", function () {
    ipcRenderer.send("setFarm:open");
  });

  $("#btnRun").on("click", function () {
    runNum++;
    $("#runNum").text(runNum);
  });

  $("#tbnResetFarm").on("click", function () {
    runNum = 1;
    $("#runNum").text(runNum);
  });
});

ipcRenderer.on("item:set", function (e, item) {
  $("#itemName").text(item);
  runNum = 1;
  $("#runNum").text(runNum);
});
