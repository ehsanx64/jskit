const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'jskit.js',
        path: path.resolve(__dirname, 'public'),
    },
};