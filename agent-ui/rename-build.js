const fs = require('fs');
const path = require('path');

const buildPath = path.join(__dirname, 'build', 'static', 'js');

const files = fs.readdirSync(buildPath);

files.forEach(file => {
    if (file.startsWith('main.') && file.endsWith('.js')) {
        //fs.renameSync(path.join(buildPath, file), path.join(buildPath, 'main.js'));
        fs.copyFileSync(path.join(buildPath, file), path.join(buildPath, 'main.js'));
    }
});

const buildCssPath = path.join(__dirname, 'build', 'static', 'css');

const cssFiles = fs.readdirSync(buildCssPath);

cssFiles.forEach(file => {
    if (file.startsWith('main.') && file.endsWith('.css')) {
        fs.copyFileSync(path.join(buildCssPath, file), path.join(buildCssPath, 'main.css'));
    }
});


console.log('Build rename complete: main.js');