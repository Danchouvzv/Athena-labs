/** Product sites are static Vite builds in public/<name>/ (built with
 *  base /<name>/ by scripts/build-sites.sh); only their entry page needs a rewrite. */
const SITES = ['argus', 'kratos']

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@splinetool/react-spline', '@splinetool/runtime'],
  async rewrites() {
    return SITES.map((name) => ({
      source: `/${name}`,
      destination: `/${name}/index.html`,
    }))
  },
}

export default nextConfig
