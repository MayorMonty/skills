export default function(config, env, helpers) {
    if (env === "PRODUCTION") {
        config.publicPath = "skills";
    }
    return config;
}