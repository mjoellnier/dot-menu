const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx", ".css"],
    modules: ["node_modules", path.resolve(__dirname, "core")]
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  },
  module: {
    loaders: [
      { test: /\.css$/, include: /app/, use: ["style-loader", "css-loader"] }
    ]
  }
};
