const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CracoLessPlugin = require("craco-less");

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
                   
                },
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: 'style-loader',
                  },
                  {
                    loader: 'css-loader',
                  },
                  {
                    loader: 'less-loader',
                    options: {
                      lessOptions: {
                        strictMath: true,
                      },
                    },
                  },
                ],
              },
            
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
        {
            plugin: CracoLessPlugin,
            
          }
    ]
}