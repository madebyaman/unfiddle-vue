const HTMLWebpackPlugin = require("html-webpack-plugin");
const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const UglifyPlugin = require("uglifyjs-webpack-plugin");

module.exports = {
  entry: ["babel-polyfill", "./src/app.js"],
  output: {
    path: join(__dirname, "build"),
    filename: "app.bundled.js"
  },
  optimization: {
    minimizer: [new UglifyPlugin()]
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.vue$/,
        use: "vue-loader"
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["vue-style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin(),
    new HTMLWebpackPlugin({
      showErrors: true,
      cache: true,
      title: "Unfiddle",
      template: join(__dirname, "index.html")
    })
  ]
};
