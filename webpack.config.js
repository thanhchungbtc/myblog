const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
if (process.env.NODE_ENV === 'production')
{
  require.extensions['.css'] = () => {
    return;
  };
}

module.exports = (/* config: PhenomicConfig */) => ({
  entry: {
    "phenomic.main": [
      process.env.PHENOMIC_ENV !== "static" &&
      require.resolve("webpack-hot-middleware/client"),
      process.env.PHENOMIC_ENV !== "static" &&
      require.resolve("react-hot-loader/patch"),
      "./App.js"
    ].filter(item => item)
  },
  output: {
    publicPath: "/",
    path: path.join(process.cwd(), "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      filename: "styles.css",
      disable: process.env.PHENOMIC_ENV !== "static"
    }),
    process.env.PHENOMIC_ENV !== "static" &&
    new webpack.HotModuleReplacementPlugin(),
    process.env.NODE_ENV === "production" &&
    new webpack.optimize.UglifyJsPlugin()
  ].filter(item => item),

  resolve: {
    // react-native(-web) | react-primitives
    extensions: [".web.js", ".js", ".json"],
    alias: {
      "react-native": "react-native-web",

      // to ensure a single module is used
      react: path.resolve(path.join(process.cwd(), "node_modules", "react")),
      "react-dom": path.resolve(
          path.join(process.cwd(), "node_modules", "react-dom")
      ),
      "react-router": path.resolve(
          path.join(process.cwd(), "node_modules", "react-router")
      )
    }
  },

  // eslint-disable-next-line max-len
  // https://github.com/facebookincubator/create-react-app/blob/fbdff9d722d6ce669a090138022c4d3536ae95bb/packages/react-scripts/config/webpack.config.prod.js#L279-L285
  node: {
    fs: "empty",
    net: "empty",
    tls: "empty"
  }
});