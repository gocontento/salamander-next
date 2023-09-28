import {createClient} from "@/lib/contento";
import {enableDraftAndRedirect} from "@gocontento/next";
import {draftMode} from "next/headers";

export async function GET(request: Request){
  const client = createClient(draftMode().isEnabled);
  return enableDraftAndRedirect(client, request, process.env.CONTENTO_PREVIEW_SECRET ?? "");
}