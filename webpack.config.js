const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  resolve: {
    alias: {
      '@modules': path.resolve(__dirname, 'src/modules'),
    },
  },
  plugins: [new CleanWebpackPlugin()],
};
