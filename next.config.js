const path = require("path");

const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: process.env.VERCEL_URL
        ? [process.env.VERCEL_URL]
        : ["localhost:3000"],
    },
  },
  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "framer-motion": path.resolve(__dirname, "node_modules/framer-motion/dist/cjs/index.js"),
      "react-hook-form": path.resolve(__dirname, "node_modules/react-hook-form/dist/index.cjs.js"),
      "@hookform/resolvers/zod": path.resolve(__dirname, "node_modules/@hookform/resolvers/zod/dist/zod.js"),
    };
    return config;
  },
};

module.exports = nextConfig;
