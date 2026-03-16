import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Use Edge Runtime for instant cold starts (experimental in Next.js 16)
export const runtime = 'experimental-edge';

export function middleware(req: NextRequest) {
  const ua = (req.headers.get('user-agent') || '').toLowerCase();
  const url = req.nextUrl;

  const isCurl = ua.includes('curl/');
  const wantsCli = url.searchParams.has('cli') && url.searchParams.get('cli') !== '0';
  const accept = (req.headers.get('accept') || '').toLowerCase();
  const prefersText = accept.includes('text/plain');

  // Manual override: allow ?cli=1 on any route
  if (wantsCli) {
    const rewritten = req.nextUrl.clone();
    rewritten.pathname = '/cli';
    rewritten.searchParams.delete('cli');
    return NextResponse.rewrite(rewritten);
  }

  // UA or Accept hint: Only rewrite top-level '/' to keep deep links intact
  if ((isCurl || prefersText) && url.pathname === '/') {
    const rewritten = req.nextUrl.clone();
    rewritten.pathname = '/cli';
    return NextResponse.rewrite(rewritten);
  }

  return NextResponse.next();
}

export const config = {
  // Avoid _next/*, static assets, api routes
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api).*)'],
};
