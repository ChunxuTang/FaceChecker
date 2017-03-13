module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname + '/public/js/',
    filename: 'face-checker.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'env']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
