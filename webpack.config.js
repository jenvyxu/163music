const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  stats: { children: false },
  entry: {
    index: path.resolve(__dirname, "src/page/index/index.js"),
    song: path.resolve(__dirname, "src/page/song/song.js"),
    admin: path.resolve(__dirname, "src/page/admin/admin.js")
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "file-loader",
            options: {}
          }
        ]
      },

      {
        test: /\.(html)$/,
        use: {
          loader: "html-loader",
          options: {
            attrs: ["img:src", "img:data-src", "audio:src"],
            minimize: true
          }
        }
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  resolve: {
    alias: {
      js: path.resolve(__dirname, "src/js/"),
      css: path.resolve(__dirname, "src/css/"),
      img: path.resolve(__dirname, "src/img/")
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["index"],
      template: path.resolve(__dirname, "src/page/index/index.html")
    }),
    new HtmlWebpackPlugin({
      filename: "song.html",
      chunks: ["song"],
      template: path.resolve(__dirname, "src/page/song/song.html")
    }),
    new HtmlWebpackPlugin({
      filename: "admin.html",
      chunks: ["admin"],
      template: path.resolve(__dirname, "src/page/admin/admin.html")
    }),
    new webpack.ProvidePlugin({
      $: "jquery"
    })
  ]
};
