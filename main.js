const { app, BrowserWindow,Menu } = require('electron')
const path = require('path')
const { Notification } = require('electron')
// const { getDoNotDisturb } = require('electron-notification-state')
// console.log(getSessionState());
const NOTIFICATION_TITLE = 'guorong自定义通知'
const NOTIFICATION_BODY = '这是一条来自于electron的自定义通知'
const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click () { console.log('New Window') }
  }, {
    label: 'New Window with Settings',
    submenu: [
      { 
        label: 'Basic',
        click () { console.log('New Window with Settings - Basic') } },
      { 
        label: 'Pro',
        click () { console.log('New Window with Settings - Pro') } 
      }
    ]
  }
])
// open
app.whenReady().then(() => {
  createWindow()
  if (process.platform === 'darwin') {
    app.dock.setMenu(dockMenu)
  }
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