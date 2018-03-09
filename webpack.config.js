const path = require('path');
module.exports = {
    node: {
  fs: 'empty'
},
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
        {
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
        }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
