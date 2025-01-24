import path from "path";

module.exports = {
  webpack: (config: { cache: { type: string; cacheDirectory: string } }) => {
    config.cache = {
      type: "filesystem",
      cacheDirectory: path.resolve(__dirname, ".cache/webpack"),
    };
    return config;
  },
};
