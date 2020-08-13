const path = require('path');
const nodeExternals = require('webpack-node-externals')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: './index.ts',
    test: './index.test.ts'
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    alias: {
      '@lodash' : path.resolve(__dirname, 'src/lodash'),
      '@' : path.resolve(__dirname, 'src'),
    }
  },
  output: {
    filename: '[name].js',
    // filename: '[name].[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false, 
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin()
  ]
}