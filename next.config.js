/** @type {import('next').NextConfig} */
const nextConfig = {

    images: {
        remotePatterns: [
            {
                // encrypted-tbn0.gstatic.com
                protocol: 'https',
                hostname: 'images.chesscomfiles.com',
            }
        ]
    }
};

module.exports = nextConfig;
