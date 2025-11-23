import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const WAITLIST_ENDPOINT = 'https://mytaskly-site-server-production.up.railway.app/waitlist'

export async function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl

  // Gestisce la login via rotta dedicata senza bloccare l'accesso.
  if (pathname === '/waitlist-login') {
    const email = searchParams.get('email') ?? ''
    const name = searchParams.get('name') ?? email.split('@')[0] ?? 'Mytaskly member'
    const platform = searchParams.get('platform') ?? 'web'
    const wantsNewsletter = (searchParams.get('newsletter') ?? 'true') !== 'false'

    // Registriamo l'email nella waitlist senza imporre autenticazione.
    if (email) {
      try {
        await fetch(WAITLIST_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            name,
            selected_platform: platform,
            newsletter: wantsNewsletter,
          }),
        })
      } catch (error) {
        console.error('Waitlist registration failed in middleware:', error)
      }
    }

    const response = NextResponse.redirect(new URL('/members', request.url))

    // Segnala al client che l'utente puo accedere all'area membri.
    if (email) {
      response.cookies.set('waitlist-registered', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: false,
      })
      response.cookies.set('user-email', email, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        httpOnly: false,
      })
    }

    return response
  }

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
