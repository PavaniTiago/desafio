"use client"

import { sidedBarSubLinks } from "@/lib/siderbar-sub-links";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function DashBoardSideBarSubLinks() {

  const pathname = usePathname();

  return (
    <section className="flex flex-col items-start gap-3">
      {sidedBarSubLinks.map((link, idx) => (
        <Link
          key={idx}
          href={link.name}
          className={`text-secondary text-xs hover:bg-neutral-200 transition-all rounded-full w-full pl-2 pr-1 py-2 ${pathname.includes(link.name) ? 'bg-primary hover:bg-pink-800 text-white' : ''}`}
        >
          {link.title}
        </Link>
      ))}
    </section>
  );
}