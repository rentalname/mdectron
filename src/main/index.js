/* eslint-disable no-unused-vars */
import { app } from 'electron';
import createMainWindow from './createMainWindow';
import setAppMenu from './setAppMenu';

let mainWindow;

function openFile() {
  console.log('openFile');
}

function saveFile() {
  console.log('saveFile');
}

function saveAsNewFile() {
  console.log('saveAsNewFile');
}

function exportPDF() {
  console.log('exportPDF');
}

app.on('ready', () => {
  mainWindow = createMainWindow();
  setAppMenu({ openFile, saveFile, saveAsNewFile, exportPDF });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', (_e, hasVisibleWindows) => {
  if (!hasVisibleWindows) {
    mainWindow = createMainWindow();
  }
});
