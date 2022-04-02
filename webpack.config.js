//gerar arquivo antes de rodar script package.json ---> npx webpack --mode development  
const path = require('path');

module.exports = { 
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader']
      }
    ]
  },
  watch: true, 
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
      watch: true
    }
  }
}