const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        clean: true, // эта опция автоматически очищает папку dist перед сборкой
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ["html-loader"],
            },
            {
                test: /\.(png|jpe?g|svg)$/i,
                type: "asset/resource",
                generator: {
                    filename: "images/[name][hash][ext][query]",
                },
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
        }),
    ],
    mode: "development",
};
