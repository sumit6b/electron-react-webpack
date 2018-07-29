//Goals:
//compile web code
//compile desktop code
//start webpack

//spawn a new process of electron by passing main file path and renderer file path

const webpack = require('webpack');
const webconfig = require('../../../webpack.web.config.js');
const desktopconfig = require('../../../webpack.desktop.config.js');
const chokidar = require('chokidar');
const _ = require('underscore');
const { electron } = require('electron');

let compiler = webpack(webconfig)
compiler.run((err, status)=>{
  //if success run electron process and attach a watcher to it.

  let dekstopCompiler = webpack(desktopconfig)
  dekstopCompiler.run((err, status)=>{
    let outpath = desktopconfig.entry.mac;
    let {spawn} = require('child_process');
    spawn(`webpack-dev-server`)

    const watcher = chokidar.watch('../desktop', {
      ignored: /(^|[/\\])\../,
      persistent: true,
    });

    watcher.on('change', _.debounce(() => {
      const child = spawn('electron', ['dist-mac/mac.bundle.js'], {
        detached: true,
        stdio: 'inherit'
      });
      child.unref();
      electron.app.quit();
    }, 3000));

    spawn('electron', ['dist-mac/mac.bundle.js']);
  })
})