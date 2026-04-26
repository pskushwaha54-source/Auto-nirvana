/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nrjsdnmdlmogegjerpau.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
    ],
  },

  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://trusted-embed-source.com;",
          },
        ],
      },
    ];
  },
};

export default nextConfig;









// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: "https",
//         hostname: "nrjsdnmdlmogegjerpau.supabase.co",
//         pathname: "/storage/v1/object/public/**",
//       },
//     ],
//   },
// };

// export default nextConfig;
