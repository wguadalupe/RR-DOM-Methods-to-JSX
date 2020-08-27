#!/usr/bin/env node
const open = require('open')
const { exec, spawn } = require('child_process')
exec('npx babel ./src --out-dir=./dist', () => {
    spawn('npx', [ 'babel', './src', '--out-dir=./dist', '--watch' ], { stdio: 'inherit' });
    open('./public/index.html')
    console.log('Watching for changes in "./src"')
})