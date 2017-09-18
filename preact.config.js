export default function(config, env, helpers) {
    if (env.production) {
        config.output.publicPath = "/skills/"
    }

    // Enable Async/Await
    let babelLoader = helpers.getLoadersByName(config, "babel-loader")[0].rule.options.plugins;

    babelLoader.push("transform-regenerator");
    babelLoader.push([
      "transform-runtime",
      {
        helpers: false,
        polyfill: false,
        regenerator: true
      }
    ]);

    return config;
}