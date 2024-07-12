const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => ({
  entry: {
    index: './src/index.js',
  },
  mode: env.mode,
  ...(env.mode === "production" ? {} : { devtool: "inline-source-map" }),
  devServer: {
    static: './docs',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    }),
  ],
  output: {
    filename: `[name].${env.mode}.[contenthash].js`,
    path: path.resolve(__dirname, 'docs'),
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /style\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader", options: {
              // importLoaders: 1,
              // modules: true
            }
          },
          "postcss-loader"
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: "[name].[ext]", outputPath: "/assets/" }
          },
        ],
      },
    ]
  },
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      `...`,
      new CssMinimizerPlugin(),
    ]
  },
});
