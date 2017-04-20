const { FuseBox, CSSPlugin, HTMLPlugin } = require('fsbx');

const fuse = FuseBox.init({
    homeDir: '../src/',
    output: '../dist/$name.js',
    log: true,
    debug: true
});

fuse.bundle('app').instructions('> index.ts');

fuse.run();
