import {BlockApiData} from "@gocontento/client/lib/api-types";

export default function RichText({ block }: { block: BlockApiData }) {
    return (
        <div
            className="mt-5 prose prose-black"
            dangerouslySetInnerHTML={{
                __html: block.fields.rich_text_field.text,
            }}
        />
    )
}