const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.loadCss = function({ include, exclude } = {}) {
  return {
    module: {
      rules: [
        {
          test: /(\.css|\.scss)$/,
          include,
          exclude,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
      ],
    },
  };
};

exports.extractCss = function({ include, exclude, use }) {
  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,
          use: ExtractTextPlugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [
      // Output extracted CSS to a file
      new ExtractTextPlugin('[name].[contenthash:8].css'),
    ],
  };
};

exports.autoprefix = function() {
  return {
    loader: 'postcss-loader',
    options: {
      plugins: function () {
        return [
          require('autoprefixer'),
        ];
      },
    },
  };
};
