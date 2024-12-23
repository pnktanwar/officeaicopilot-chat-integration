/* eslint-disable */
import { CleanWebpackPlugin } from 'clean-webpack-plugin';

export default {
  entry: {
    main: './src/index.ts'
  },
  experiments: {
    outputModule: true,
  },
  output: {
    filename: 'officeaicopilot-chat.js',
    libraryTarget: 'module',
    module: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: {
          loader: 'ts-loader',
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new CleanWebpackPlugin(),
  ],
  devServer: {
    port: 3001,
    headers: {
      'Access-Control-Allow-Origin': '*', // Allows all origins (use carefully)
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS', // Allowed HTTP methods
      'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization', // Allowed headers
    },
  },
  optimization: {
    minimize: false
  },
};