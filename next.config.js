/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        EMAIL_KEY: process.env.EMAIL_KEY,
    }
}

module.exports = nextConfig
