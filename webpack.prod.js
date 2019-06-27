const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: ["./src/index"]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: "Webpack with React",
      favicon: "./src/img/favicon.png",
      template: path.resolve(__dirname, "src/index.html")
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css"
    }),
    new webpack.HotModuleReplacementPlugin(),
    // Replacing PRODUCTION to true in compile time
    new webpack.DefinePlugin({
      PRODUCTION: JSON.stringify(true)
    })
  ]
});
