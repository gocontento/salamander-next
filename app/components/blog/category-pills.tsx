"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
    {
        href: "/blog/category/developers",
        label: "Developers"
    },
    {
        href: "/blog/category/productivity",
        label: "Productivity"
    },
    {
        href: "/blog/category/features",
        label: "Features"
    }
]
export default function CategoryPills() {
    const pathname = usePathname();
    return (
        <div className="py-7 mx-auto inline-flex flex-wrap items-center width-100 md:justify-between gap-x-2 gap-y-4 md:gap-5">
            {links.map((link) => {
                return (
                    <Link key={link.href} href={link.href} className={`text-[12px] px-5 py-2 text-white rounded-full ${pathname === link.href ? 'bg-pink' : 'bg-charcoal hover:bg-pink'} hover:text-white`}>
                        {link.label}
                    </Link>
                )
            })}
        </div>
    )
}