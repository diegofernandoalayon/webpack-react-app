const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path') 
module.exports = {
  // entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-react',
              {
                runtime: 'automatic' // 'classic'
              }

            ]
          ]
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: 'src/index.html'})
  ]
}