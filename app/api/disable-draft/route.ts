import { draftMode } from 'next/headers'

// Disable draft mode and refresh the page
export async function GET(request: Request) {
  draftMode().disable()

  // Get the origin route from the Referer header
  const originRoute = request.headers.get('Referer')

  // If the Referer header is not available, redirect to a default route
  if (!originRoute) {
    return Response.redirect('/')
  }

  // Redirect to the origin route
  return Response.redirect(originRoute)
}
