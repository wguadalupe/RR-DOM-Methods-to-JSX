#!/usr/bin/env node
const spawn = require('cross-spawn');
const { exec } = require('child_process');

// Wrap your logic inside an async function to use await
async function main() {
    const open = await import('open');

    exec('npx babel ./src --out-dir=./dist', () => {
        spawn('npx', ['babel', './src', '--out-dir=./dist', '--watch'], { stdio: 'inherit' });
        // Use open.default here due to the way ESM modules are imported dynamically
        open.default('./public/index.html').catch(console.error);
        console.log('Watching for changes in "./src"');
    });
}

main().catch(console.error);
