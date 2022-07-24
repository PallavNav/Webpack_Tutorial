
//by default variale available in webpack.js
const path = require('path');

module.exports = {
    mode:"development",
    entry: "./src/index.js",
    devServer:{
        static: {
            directory:path.join(__dirname,'dist'),
        },
        compress:true,
        port: 3500
    },
    module: {
        rules: [{
        test:/\.css$/,
        use:[
            'style-loader', 'css-loader'
        ]
    }]}
}