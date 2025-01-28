/** @type {import('next').NextConfig} */

const nextConfig = {
  // async redirects() {
  //   return [
  //     {
  //       source: `/${"en" | "es"}/dashboard/home`,
  //       destination: `/dashboard`,
  //       permanent: true,
  //     },
  //   ];
  // },
  images: {
    domains: [
      "www.tradingview.com",
      "cryptobots-assets.s3.us-east-1.amazonaws.com",
      "cryptobots.io.s3.eu-north-1.amazonaws.com",
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|swf|avi|mkv)$/, // Handle video file formats
      use: [
        {
          loader: "file-loader",
          options: {
            outputPath: "static/videos", // Output directory for video files
            publicPath: "/.next/static/videos", // Public path for accessing the video files
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
