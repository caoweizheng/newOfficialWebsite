/*
 * @Author: Jack
 * @Date: 2018-06-18 10:08:49
 * @Last Modified by: czy0729
 * @Last Modified time: 2018-06-19 15:16:39
 */

module.exports = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.module.rules.push({
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: dev
        }
      });
    }

    return config;
  }
};
