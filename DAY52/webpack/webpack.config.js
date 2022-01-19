const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve('./src/app.js')
    },
    output: {
        filename: '[name].js',
        path: path.resolve('./dist')
    },
    module: {
        rules: [
            //       {
            //           test: /\.js$/,
            //           use: [
            //               path.resolve('./myLoader.js')
            //           ]
            //       }
            //   ]
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset',
                parser: {
                    dataUrlCondition: {
                        maxSize: 20*1024
                    }
                }
            }
        ]
    }
}