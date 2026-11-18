import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Gujarat Sales home">
      <Image src="/logo.png" alt="" width={678} height={725} priority className="h-12 w-auto -ml-[5px] -my-1" />
      <span className={`leading-[0.95] font-extrabold tracking-[0.08em] text-[14px] transition-colors ${light ? "text-white" : "text-brand-900"}`}>
        GUJARAT
        <br />
        SALES
      </span>
    </Link>
  );
}
