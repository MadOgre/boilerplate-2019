const webpack = require("webpack");
const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./assets/index.ejs"
});
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const miniCssExtractPlugin = new MiniCssExtractPlugin({
  filename: "[name].css",
  chunkFilename: "[id].css"
});
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: ["@babel/polyfill", "./assets/js/main.js"],
  mode: "production",
  output: {
    path: resolve(__dirname, "public"),
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      use: [{
        loader: "babel-loader",
        options: {
          cacheDirectory: true,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }]
    }, {
      test: /\.module.scss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              localIdentName: "[path][name]__[local]--[hash:4]"
            },
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    }, {
      test: /\.s?css$/,
      exclude: /\.module.scss/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            sourceMap: true
          }
        }, {
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.ProvidePlugin({
      React: "react",
      Component: ["react", "Component"]
    }),
    miniCssExtractPlugin,
    new CleanWebpackPlugin()
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss", ".css"]
  },
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  },
  performance: {
    maxAssetSize: 500000,
    maxEntrypointSize: 500000
  },
  devtool: "source-map"
};