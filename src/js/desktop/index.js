import Application from './application';
import {app} from 'electron'


function start(){
  let createWindow = () => {
    let application = new Application();
    application.start();
  }

  app.on('ready', createWindow)
}


start();