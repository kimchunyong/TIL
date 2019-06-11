# webpack이란?

- Javascript Application의 Static Module Bundler
- Webpack이 실행된다면 Dependencies Graph를 통해 필요한 형태의 하나 또는 여러개의 Bundle로 생성합니다.

## bundle이란?

- 소프트웨어 및 일부 하드웨어와 함께 작동하는 데 필요한 모든 것을 포함하는 Package
- 각각의 모듈들에 대해 의존성 관계를 파악하여 하나 또는 여러개의 그룹으로 볼 수 있습니다.

```javascript
//package.json
{
    "name": "one-line-diary",
    "version": "1.0.0",
    "description": "한 줄 다이어리",
    "main": "index.js",
    "scripts": {
        "start": "webpack-dev-server --mode development",
        "build": "webpack --mode production"
    },
    "keywords": [
        "javascript"
    ],
    "author": "kimchunyong",
    "license": "MIT",
    "devDependencies": {
        "@babel/core": "^7.4.5",
        "@babel/preset-env": "^7.4.5",
        "babel-loader": "^8.0.6",
        "clean-webpack-plugin": "^2.0.2",
        "eslint": "^5.16.0",
        "html-webpack-plugin": "^3.2.0",
        "json-server": "^0.15.0",
        "prettier": "^1.17.1",
        "terser-webpack-plugin": "^1.3.0",
        "webpack": "^4.32.2",
        "webpack-cli": "^3.3.2",
        "webpack-dev-server": "^3.4.1"
    }
}
```

```javascript
//webpack.config.js
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');

const path = require('path');
const ROOT_DIR = path.resolve(__dirname, './');
const DIST_DIR = path.resolve(ROOT_DIR, 'dist');

module.exports = {
  entry: {
    //mode:'development',
    app: ['./src/index.js'],
  },
  resolve: {
    extensions: ['.js', '.css'],
  },
  output: {
    filename: 'index.js',
    path: DIST_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    historyApiFallback: true,
    inline: true,
    open: true,
    overlay: {
      warnings: true,
      errors: true,
    },
    stats: {
      color: true,
    },
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          drop_console: true,
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },
  plugins: [
    new CleanWebpackPlugin({ DIST_DIR }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
    }),
  ],
};
```

```javascript
//.babelrc
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "entry"
            }
        ]
    ]
}
```
