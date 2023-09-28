import {createContentoClient} from "@gocontento/client";

export function createClient(isPreview: boolean = false){
    return createContentoClient({
        apiURL: process.env.CONTENTO_API_URL ?? "",
        apiKey: process.env.CONTENTO_API_KEY ?? "",
        siteId: process.env.CONTENTO_SITE_ID ?? "",
        isPreview: isPreview,
    })
}