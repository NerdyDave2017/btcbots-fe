/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
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
      "btcbots-assets.s3.us-east-1.amazonaws.com",
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

export default withNextIntl(nextConfig);
