const ipc = require('electron').ipcRenderer

const errorBtn = document.getElementById('sss')

errorBtn.addEventListener('click', function (event) {
  ipc.send('open-error-dialog')
})