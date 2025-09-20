import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Route protette che richiedono l'iscrizione alla waitlist
  const protectedRoutes = ['/members', '/early-access']

  const pathname = request.nextUrl.pathname

  // Controlla se la route corrente è protetta
  const isProtectedRoute = protectedRoutes.some(route =>
    pathname.startsWith(route)
  )

  if (isProtectedRoute) {
    // Controlla se l'utente ha un token di accesso valido nei cookie
    const waitlistToken = request.cookies.get('waitlist-access-token')

    if (!waitlistToken) {
      // Reindirizza alla pagina di login/registrazione se non ha il token
      const loginUrl = new URL('/waitlist-login', request.url)
      loginUrl.searchParams.set('redirect', pathname)
      return NextResponse.redirect(loginUrl)
    }

    // Verifica la validità del token (opzionale - puoi implementare una verifica più robusta)
    // Per ora accettiamo qualsiasi token presente
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