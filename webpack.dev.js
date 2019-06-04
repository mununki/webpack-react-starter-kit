const merge = require("webpack-merge");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: [
      "./src/index",
      "webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true"
    ]
  },
  devtool: "inline-source-map",
  devServer: {
    contentBase: "./dist"
  }
});
