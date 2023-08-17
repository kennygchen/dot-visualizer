const { app, BrowserWindow } = require('electron')
const path = require('path')
;

const isDev = process.env.NODE_ENV !== 'production'

// const graphDot = () => {
//     d3.select("#graph").graphviz()
//         .renderDot('digraph  {a -> b a -> c}');
// }

const createWindow = () => {
    const win = new BrowserWindow({
      width: isDev ? 1300:800,
      height: 600,
      webPreferences: {
        preload: path.join(__dirname, 'preload.js'),
        // nodeIntegration: true,
        // nodeIntegrationInWorker: true,
        // nodeIntegrationInSubFrames: true,
        // enableRemoteModule: true,
        // contextIsolation: false, //required flag
        // sandbox: true
      }
    })
    
    if (isDev) {
        win.webContents.openDevTools()
    }
    win.loadFile('index.html')
}
  
app.whenReady().then(() => {
    createWindow()
    // graphDot()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
            // graphDot()
        }
    })
})
  
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})