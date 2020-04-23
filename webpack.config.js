const path = require('path')
const postCSSPlugins=[
    require('postcss-import'), //inline imports
    require('postcss-simple-vars'), // simple vars
    require('postcss-nested'),
    require('autoprefixer') // align other browsers
    ]

module.exports = { // change file name and dir
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}