module.exports = {
    webpack: {
      configure: {
        output: {
          filename: "static/js/be-min.js",
        },
        optimization: {
          runtimeChunk: false,
          splitChunks: {
            chunks(chunk) {
              return false;
            },
          },
        },
      },
    },
    plugins: [
      {
        plugin: {
          overrideWebpackConfig: ({ webpackConfig }) => {
            webpackConfig.plugins[5].options.filename =
              "static/css/be.min.css";
            return webpackConfig;
          },
        },
        options: {},
      },
    ],
  };
  