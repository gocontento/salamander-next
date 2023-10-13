import { draftMode } from 'next/headers';
import { createClient, generateSeo } from "@/lib/contento";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Home from "@/app/components/pages/home";

const client = createClient();

export async function generateMetadata(): Promise<Metadata> {
    return await client.getContentBySlug("home", "general_page")
        .then((content) => {
            return generateSeo(content, {}, content.url?.replace('/home', ''));
        })
        .catch(() => {
            return {};
        });
}

export default async function page() {
    const content = await createClient(draftMode().isEnabled)
        .getContentBySlug("home", "general_page")
        .catch(() => {
            notFound();
        });

    return (
        <Home initialContent={content} />
    )
}
