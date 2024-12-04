/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        EMAIL_KEY: process.env.EMAIL_KEY,
    },
    webpack: (config) => {
        config.cache = false;
        return config;
      },
}

module.exports = nextConfig
