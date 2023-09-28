import {AssetApiData} from "@gocontento/client/lib/api-types";

export default function Image({ asset, apiParams, className, noWebp }: { asset: AssetApiData, apiParams?: string, className?: string, noWebp?: boolean }) {
    return (
        <>
            {noWebp && (
                <img src={apiParams ? asset.url + "?" + apiParams : asset.url}
                     alt={asset.description ?? ""}
                     className={className}
                />
            )}
            {!noWebp && (
                <picture className={className}>
                        <source srcSet={apiParams ? asset.url + "?" + apiParams + '&fm=webp' : asset.url + '?fm=webp'}
                                type="image/webp"
                        />
                    <img src={apiParams ? asset.url + "?" + apiParams : asset.url}
                         alt={asset.description ?? ""}
                    />
                </picture>
            )}
        </>
    );
}