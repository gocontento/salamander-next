'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { CategoryLink } from '@/types'

export default function CategoryPills({
  categoryLinks,
}: {
  categoryLinks: CategoryLink[]
}) {
  const pathname = usePathname()

  return (
    categoryLinks && (
      <div className="mx-auto inline-flex flex-wrap items-center gap-x-2 gap-y-4 py-7 md:justify-between md:gap-5">
        {categoryLinks.map((link) => {
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-5 py-2 text-[12px] text-white ${
                pathname === link.href ? 'bg-pink' : 'bg-charcoal hover:bg-pink'
              } hover:text-white`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>
    )
  )
}
