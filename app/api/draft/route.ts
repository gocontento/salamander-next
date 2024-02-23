import { createClient } from '@/lib/contento'
import { enableDraftAndRedirect } from '@gocontento/next'

export async function GET(request: Request) {
  const client = createClient(true)
  return enableDraftAndRedirect(
    client,
    request,
    process.env.CONTENTO_PREVIEW_SECRET ?? '',
  )
}
