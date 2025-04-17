/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ["picsum.photos"],
    },
  };

const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const res = await fetch(`${apiUrl}/some-endpoint`);

  
  export default nextConfig;