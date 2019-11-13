const { resolve } = require("path");

module.exports = {
  entry: "./assets/js/main.js",
  mode: "production",
  output: {
    path: resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};