/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      { source: "/about", destination: "/#experience", permanent: true },
      { source: "/who-we-serve", destination: "/#program", permanent: true },
      { source: "/what-we-do", destination: "/#program", permanent: true },
      { source: "/investment-framework", destination: "/#investments", permanent: true },
      { source: "/capital-partners", destination: "/#investments", permanent: true },
      { source: "/projects", destination: "/#investments", permanent: true },
      { source: "/projects/:path*", destination: "/#investments", permanent: true },
      { source: "/institutional-inquiry", destination: "/residence-inquiry", permanent: true },
    ]
  },
}

export default nextConfig
