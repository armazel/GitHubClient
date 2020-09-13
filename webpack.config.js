const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    devtool: 'source-map',
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index_bundle.js",
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                },
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts$/,
                exclude: /node_modules/,
                loader: 'tslint-loader',
                options: {
                    fix: true,
                    emitError: true,
                    failOnError: true,
                    failOnWarning: true,
                },
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: "[local]___[hash:base64:5]"
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
              }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
}