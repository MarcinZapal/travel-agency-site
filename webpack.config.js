const path = require('path')
const postCSSPlugins=[
    require('postcss-import'), //inline imports
    require('postcss-mixins'), // create reusable part of file
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
    devServer :{
        before: function(app, server){
            server._watch('./app/**/*.html')
        },
        contentBase: path.join(__dirname, 'app'),
        hot: true, /* inject js and css on the fly to browser memory */
        port: 3000,
        host: '0.0.0.0'

    },
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader?url=false', {loader: 'postcss-loader', options: {plugins: postCSSPlugins}}]
            }
        ]
    }
}