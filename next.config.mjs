/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,

  // cPanel static export
  output: "export",

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: "/fintech",
        destination: "/services",
      },
      {
        source: "/digital",
        destination: "/digitalandcommerceservices",
      },
      {
        source: "/aeps",
        destination: "/services/aeps",
      },
      {
        source: "/bbps",
        destination: "/services/bbps",
      },
      {
        source: "/credit-card",
        destination: "/services/creditcardbillpayment",
      },
      {
        source: "/payment-solutions",
        destination: "/services/paymentsolutions",
      },
      {
        source: "/pos",
        destination: "/services/pos",
      },
      {
        source: "/matm",
        destination: "/services/matm",
      },
      {
        source: "/ecommerce",
        destination: "/digitalandcommerceservices/ecommercesolution",
      },
      {
        source: "/travel",
        destination: "/digitalandcommerceservices/travelservices",
      },
      {
        source: "/holiday-packages",
        destination: "/digitalandcommerceservices/holidaypackages",
      },
    ];
  },
};



export default nextConfig;
