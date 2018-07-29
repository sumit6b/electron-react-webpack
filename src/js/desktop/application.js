import {electron, app, BrowserWindow} from 'electron'



export default class Application {
  start(){
    this.browserWindow = new BrowserWindow({width: 800, height: 600})
    this.browserWindow.loadURL('http://localhost:8080');
  }
}