const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "production",
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: '/assets'
    },
    devServer: {
        port: 4200,
        open: true
    },
    module: {
        rules: [{
            test: /\.(scss|css)$/i,
            use: ["style-loader", "css-loader", "sass-loader"]
        },
            {
                test: /\.(png|jpe?g|gif|wav)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        title: "HW #17",
        template: "src/index.html"
    })]
}