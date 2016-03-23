module.exports = {
  entry: 'index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.css$/,
      loader: 'style!css'
    }]
  },
  resolve: {
    modulesDirectories: ['node_modules', __dirname],
    extensions: ['', '.js']
  },

  devServer: {
    inline: true,
    stats: 'errors-only'
  }
}
