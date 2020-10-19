const electron = require("electron");
const url = require("url");
const path = require("path");

const { app, BrowserWindow } = electron;

let mainWindow;

app.on("ready", function() {
  mainWindow = new BrowserWindow({ width: 480, height: 320,frame: false });
  mainWindow.setFullScreen(true);
  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
