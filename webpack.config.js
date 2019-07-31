const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".jsx"],
    modules: ["node_modules", path.resolve(__dirname, "core")]
  },
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist")
  }
};
