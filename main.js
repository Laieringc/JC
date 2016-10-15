 const {
     app,
     BrowserWindow
 } = require('electron');

 let win;

 function createWindow() {

     win = new BrowserWindow({
         width: 800,
         height: 600,
         center: true,
         titleBarStyle: "hidden"

     })

     win.loadURL(`file://${__dirname}/index.html`)

     //Menu.setApplicationMenu(menu);

     //调试功能
     //win.webContents.openDevTools()

     // 处理窗口关闭
     win.on('closed', () => {
         win = null
     })
 }

 //初始化
 app.on('ready', createWindow)
     // 处理退出
 app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') {
         app.quit()
     }
 })

 app.on('activate', () => {
     if (win === null) {
         createWindow()
     }
 })

 var template = [{}];

 //菜单栏
 //  const {
 //      Menu
 //  } = require('electron')
 //  const menu = Menu.buildFromTemplate(template)
 //  Menu.setApplicationMenu(menu)


 //提示框
 const ipc = require('electron').ipcMain
 const dialog = require('electron').dialog

 ipc.on('open-error-dialog', function(event) {
     dialog.showErrorBox('An Error Message', 'Demonstrating an error message.')
 })