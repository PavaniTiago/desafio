import { sidedBarLinks } from "@/lib/sidebar-links";
import Image from "next/image";
import Link from "next/link";

export default function DashBoardSideBarLinks() {
  return (
    <section className="flex flex-col items-start gap-3 mt-14">
      {sidedBarLinks.map((link, idx) => (
        <Link key={idx} className="flex items-center text-secondary text-sm gap-3 hover:bg-neutral-200 transition-all rounded-md w-full px-1 py-2" href={link.name}><Image alt={link.icon + "image"} src={link.icon} width={0} height={0} className="w-5 h-5"/> {link.title}</Link>
      ))}
    </section>
  );
}
