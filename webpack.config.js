const path = require('path') // import

module.exports = { // change file name and dir
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development', // add module to avoid error
    watch: true, // auto run, changes will be visible in browser after refresh
    module:{
        rules: [
            { 
                test: /\.css$/i, // understand and process css files
                use: ['css-loader'] // understand and process css files
            }
        ]
    }   
}