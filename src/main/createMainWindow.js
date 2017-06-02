import { BrowserWindow } from 'electron';

const loadDevtool = require('electron-load-devtool');

class MainWindow {
  constructor() {
    this.window = new BrowserWindow({ width: 800, height: 600 });
    this.window.loadURL(`file://${__dirname}/../../index.html`);
    loadDevtool(loadDevtool.REACT_DEVELOPER_TOOLS);
    this.window.webContents.openDevTools();
    this.window.on('closed', () => {
      this.window = null;
    });
  }
}

function createMainWindow() {
  return new MainWindow();
}

export default createMainWindow;
