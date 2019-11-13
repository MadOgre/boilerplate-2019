const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./assets/index.ejs"
});

module.exports = {
  entry: ["@babel/polyfill", "./assets/js/main.js"],
  mode: "production",
  output: {
    path: resolve(__dirname, "public"),
    filename: "bundle.js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [{
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }]
    }]
  },
  plugins: [
    htmlWebpackPlugin
  ]
};