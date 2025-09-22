import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Le route /members e /early-access ora gestiscono il login internamente
  // Rimuoviamo il redirect automatico per permettere il login integrato

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match tutte le routes eccetto:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (manifest.json, robots.txt, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\..*|manifest.json|robots.txt).*)',
  ],
}