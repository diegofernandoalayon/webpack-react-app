const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path') 
module.exports = (env, argv) => {
  const {mode} = argv 
  const isProduction = mode === 'production'
  return {
    output: {
      filename: isProduction ? '[name].[contenthash].js' : 'main.js',
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
    ],
    devServer: {
      open: true, // para que se abra en el navegador
      port: 3000,
      compress: true,
      client: {overlay: true }// para abrir un overlay con los errores
    },
    devtool: 'source-map'
  }
  }
  // entry: './src/index.js',
  