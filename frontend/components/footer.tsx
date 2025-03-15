import Link from 'next/link';
import Image from 'next/image';
import { MailCheck, MapPin, PhoneCall, Rocket } from 'lucide-react';

export function Footer() {
  return (
    <footer className=" py-4 px-20 absolute z-40 inline-block w-full  bottom-0 ">
      <Image
        src={'/salsarootsfooter.png'}
        alt="Salsaroots"
        fill
        className=" object-cover opacity-10"
      />
      <div className="mx-auto flex justify-around items-center">
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-12 h-12">
            <Image
              src="/salsaroots1.png"
              alt="SalsarootsFooter"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-quinary to-senary">
            Salsaroots
          </h2>
        </div>

        <div className="text-sm text-center md:text-right">
          <div className="flex flex-col">
            <p>We are located at TGV Hellas </p>

            <p className="flex items-center gap-2">
              <span className="text-secondary">
                <MapPin />
              </span>
              <span>Tiel, Netherlands</span>
            </p>
            <span>Hilversumstraat, 4001 JA Tiel</span>
          </div>
          <div className="flex flex-col pt-2">
            <p className="flex items-center gap-2">
              <span className="text-secondary">
                <PhoneCall />
              </span>
              <span> +31687184761</span>
            </p>
          </div>
          <div className="flex flex-col pt-2">
            <p className="flex items-center gap-2">
              <span className="text-secondary">
                <MailCheck />
              </span>
              <span> salsadenhaag.nl@gmail.com</span>
            </p>
          </div>
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
      <div className="mx-auto flex flex-col justify-around items-center p-2">
        <p className="text-sm">
          💃 Dancing connects people! No matter if you're new or experienced, everyone is welcome to
          join the rhythm! Let's move, learn, and grow together.
        </p>
        <p className="text-sm">We come from Colombi to share our passion for Dance with you!</p>
      </div>
    </footer>
  );
}
