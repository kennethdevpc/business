import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-dashed py-8 px-4">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/probar-ABICVtrvj3q8ITp2kbSZHGY0qfuyLM.png"
                alt="Salsaroots"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-sm max-w-[200px]">
              We come from Colombia to share our passion for Dance with you!
            </p>
          </div>

          <div className="text-sm text-center md:text-right">
            <p>We are located at TCV Helles 2a</p>
            <p>Tiel, Netherlands</p>
            <p className="mt-2">WhatsApp: +31637634851</p>
            <div className="flex gap-4 mt-2 justify-center md:justify-end">
              <Link href="https://www.instagram.com/salsarootsdanceacademy/" className="text-sm">
                Instagram
              </Link>
              <Link href="https://www.facebook.com/salsaroots/" className="text-sm">
                Facebook
              </Link>
              <Link href="https://www.tiktok.com/@salsaroots" className="text-sm">
                TikTok
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
