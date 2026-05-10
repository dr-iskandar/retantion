import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  // A list of all locales that are supported
  locales: ['en', 'id'],

  // Used when no locale matches
  defaultLocale: 'id'
});

export const config = {
  // Match all pathnames except for
  // - …/api (API routes)
  // - …/_next (Next.js internals)
  // - …/static (static files)
  // - …/favicon.ico (favicon file)
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
