import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hostname = request.headers.get('host') || '';
  
  // Check if accessing admin routes
  if (pathname.startsWith('/admin')) {
    // Allow access to login page
    if (pathname === '/admin/login' || pathname === '/admin/login/') {
      return NextResponse.next();
    }
    
    // For other admin routes, check authentication via cookie/session
    // Since we're using client-side auth with sessionStorage, 
    // we'll let the client-side handle the redirect
    // This middleware mainly handles subdomain routing
    
    // Check if accessing from admin subdomain
    const isAdminSubdomain = hostname.startsWith('admin.') || hostname.includes('admin.');
    
    // If on admin subdomain and trying to access non-admin routes, redirect to admin
    if (isAdminSubdomain && !pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    return NextResponse.next();
  }
  
  // If on admin subdomain, redirect all non-admin routes to admin
  const isAdminSubdomain = hostname.startsWith('admin.') || hostname.includes('admin.');
  if (isAdminSubdomain && !pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|public).*)',
  ],
};
