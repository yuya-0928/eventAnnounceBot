const { app, BrowserWindow } = require('electron')
const ejse = require('ejs-electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.ejs')
}

// WSLでデバックする際に必要
app.commandLine.appendSwitch("no-sandbox");

app.whenReady().then(() => {
  createWindow()
})