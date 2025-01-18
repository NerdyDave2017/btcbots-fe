import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname: "www.tradingview.com",
      },
      {
        hostname: "cryptobots-assets.s3.us-east-1.amazonaws.com",
      },
      {
        hostname: "cryptobots.io.s3.eu-north-1.amazonaws.com",
      },
      {
        hostname: "lh3.googleusercontent.com",
      },
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
