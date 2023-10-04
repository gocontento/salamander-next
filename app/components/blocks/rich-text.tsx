import {BlockData} from "@gocontento/client/lib/types";

export default function RichText({ block }: { block: BlockData }) {
    return (
        <div
            className="mt-5 prose prose-black mx-auto"
            dangerouslySetInnerHTML={{
                __html: block.fields.rich_text_field.text,
            }}
        />
    )
}