const webpack = require('webpack');

module.exports = function override(config) {
    config.ignoreWarnings = [/Failed to parse source map/];
    const fallback = config.resolve.fallback || {};
    Object.assign(fallback, {
        "assert": require.resolve("assert"),
        "https": require.resolve("https-browserify"),
        "os": require.resolve("os-browserify"),
        "url": require.resolve("url")
    })
    config.resolve.fallback = fallback;
    config.plugins = (config.plugins || []).concat([
/*
          new webpack.ProvidePlugin({
            process: "process/browser",
          }),
*/
          new webpack.ProvidePlugin({
            Buffer: ["buffer", "Buffer"],
          })
    ])
    return config;
}