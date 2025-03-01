import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-dashed py-4 px-4">
      <div className="max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/probar-ABICVtrvj3q8ITp2kbSZHGY0qfuyLM.png"
              alt="Salsaroots"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold">Salsaroots</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="border-dashed">Subscribe</button>
          <Link href="https://instagram.com" className="text-sm">
            IG
          </Link>
        </div>
      </div>
    </header>
  );
}
