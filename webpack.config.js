
//by default variale available in webpack.js
const path = require('path');

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:"output.js"
    },
    devServer:{
        static: {
            directory:path.join(__dirname,'dist'),
        },
        compress:true,
        port: 3500
    },
    module: {
        rules: [{
        test: /\.css$/,

        // this array has to be inorder, and it willstart executing from reverse.
        use:[
            'style-loader', 'css-loader'
        ]
    }]}
}