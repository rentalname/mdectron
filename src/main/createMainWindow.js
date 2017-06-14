import { BrowserWindow, ipcMain } from 'electron'

const loadDevtool = require('electron-load-devtool')

class MainWindow {
  constructor () {
    this.window = new BrowserWindow({ width: 800, height: 600 })
    this.window.loadURL(`file://${__dirname}/../../index.html`)
    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS)
    this.window.webContents.openDevTools()
    this.window.on('closed', () => {
      this.window = null
    })
  }
  requestText () {
    return new Promise((resolve) => {
      this.window.webContents.send('REQUEST_TEXT')
      ipcMain.once('REPLY_TEXT', (_e, text) => resolve(text))
    })
  }
}

function createMainWindow () {
  return new MainWindow()
}

export default createMainWindow
