const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withTM = require("next-transpile-modules")(["react-syntax-highlighter"]);
module.exports = withPlugins([withBundleAnalyzer, withTM]);
