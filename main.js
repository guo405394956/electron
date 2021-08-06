const { app, BrowserWindow } = require('electron')
const path = require('path')
const { Notification } = require('electron')
// const { getDoNotDisturb } = require('electron-notification-state')
// console.log(getSessionState());
const NOTIFICATION_TITLE = 'guorong自定义通知'
const NOTIFICATION_BODY = '这是一条来自于electron的自定义通知'

// open
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
}).then(showNotification)

// close
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })
  win.loadFile('index.html')
}

function showNotification () {
  new Notification({ title: NOTIFICATION_TITLE, body: NOTIFICATION_BODY }).show()
}