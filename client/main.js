const { app, BrowserWindow } = require('electron')

function createWindow () {
	// Create the browser window.
	const win = new BrowserWindow({
		width: 1024,
		height: 768,
		minWidth: 1024,
		minHeight: 768,
		show: true,
		center: true,
		fullscreenable: false,
		acceptFirstMouse: true,
		transparent: true,
		frame: true,
		vibrancy: 'sidebar',
		webPreferences: {
			nodeIntegration: true
		}
	})

	// win.removeMenu()

	// and load the index.html of the app.
	win.loadURL('http://localhost:3000');

	// Open the DevTools.
	win.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
	setTimeout(createWindow, 300)
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {})

app.on('activate', () => {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow()
	}
})
