"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {CategoryLink} from "@/types";

export default function CategoryPills({categoryLinks}: {categoryLinks: CategoryLink[]}) {
    const pathname = usePathname();

    return categoryLinks && (
        <div className="py-7 mx-auto inline-flex flex-wrap items-center md:justify-between gap-x-2 gap-y-4 md:gap-5">
            {categoryLinks.map((link) => {
                return (
                    <Link key={link.href} href={link.href}
                          className={`text-[12px] px-5 py-2 text-white rounded-full ${pathname === link.href ? 'bg-pink' : 'bg-charcoal hover:bg-pink'} hover:text-white`}>
                        {link.label}
                    </Link>
                )
            })}
        </div>
    )
}