const fs = require('fs');
const { resolve } = require('path');

const filesToCopy = ['prefetch.js', 'web-worker-prefetch.js']

// User's local directory
const userPath = process.env.INIT_CWD;
let isInstalled = false;

if (fs.statSync(resolve(userPath, 'package.json')).isFile()){
  const packageJson = JSON.parse(fs.readFileSync(resolve(userPath, 'package.json')).toLocaleString());

  if(packageJson.assetDir) {
    filesToCopy.forEach(file => {
      fs.copyFileSync(file, resolve(userPath, packageJson.assetDir, file));
    });
    process.exit(0);
  }
}

if (fs.statSync(resolve(userPath, 'assets')).isDirectory()) {
  filesToCopy.forEach(file => {
    fs.copyFileSync(file, resolve(userPath, 'assets', file));
  });
  process.exit(0);
}