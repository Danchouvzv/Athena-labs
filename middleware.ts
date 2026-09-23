import { NextResponse, type NextRequest } from 'next/server'

/** Product sites served from this deployment. Each one is a static Vite build
 *  under public/sites/<name>, answered on <name>.<domain> — see
 *  scripts/build-sites.sh for how the builds get there. */
const SITES = ['argus', 'kratos']

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') ?? ''
  const sub = host.split('.')[0]
  if (!host.includes('.') || !SITES.includes(sub)) return NextResponse.next()

  // The builds use root-relative URLs (/assets/…, /media/…), so every path on
  // the subdomain maps straight into that site's folder.
  const url = req.nextUrl.clone()
  const path = url.pathname.endsWith('/')
    ? `${url.pathname}index.html`
    : url.pathname
  url.pathname = `/sites/${sub}${path}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: '/((?!_next/).*)',
}
