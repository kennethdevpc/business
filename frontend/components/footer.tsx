import Link from 'next/link';
import Image from 'next/image';
import { MailCheck, MapPin, PhoneCall } from 'lucide-react';
import { RiTiktokLine } from 'react-icons/ri';
import { LuFacebook } from 'react-icons/lu';
import { FaInstagram } from 'react-icons/fa';

export function Footer() {
  return (
    // <footer className="bg-quinary shadow-lg shadow-cyan-500/50 inset-shadow-sm inset-shadow-quinary py-4 px-20 absolute z-40 inline-block w-full  bottom-0 ">
    // <footer className="text-justify relative py-4 px-10 md:px-20 md:absolute z-40 inline-block w-full  bottom-0 gap-10">

    <footer className="text-justify relative py-4 px-10 md:px-20 z-40 w-full gap-10">
      <Image
        src={'/salsarootsfooter.png'}
        alt="Salsaroots"
        fill
        className=" object-cover opacity-8  pointer-events-none md:block hidden"
      />

      <div className="md:flex md:flex-row flex-col text-lg p-2 mx-auto flex justify-around items-center gap-5 md:gap-10">
        <div className="flex flex-col items-center gap-1">
          <div className="relative w-12 h-12 ">
            <Image
              src="/salsaroots1.png"
              alt="SalsarootsFooter"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold bg-clip-text  text-transparent bg-gradient-to-r from-septenary to-senary">
            Salsaroots
          </h2>
          We come from Colombia to share our passion for Dance with you!
        </div>

        <div className=" text-center md:text-right">
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
        <div className=" text-center md:text-right align-items-center">
          <div className="flex gap-4 mt-2 justify-center md:justify-center">
            <Link
              href="https://www.instagram.com/salsarootsacademy/"
              className="text-sm"
              target="_blank"
            >
              <FaInstagram color="red" size={30} />
              Instagram
            </Link>
            <Link href="https://www.facebook.com/salsaroots/" className="text-sm" target="_blank">
              <LuFacebook color="red" size={30} /> Facebook
            </Link>
            <Link href="https://www.tiktok.com/@salsaroots" className="text-sm" target="_blank">
              <RiTiktokLine color="red" size={30} />
              TikTok
            </Link>
          </div>
          <div className="relative z-10 mx-auto flex justify-center items-center mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2462.296101188873!2d5.432607877042046!3d51.89206027190337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6f96cfac7f543%3A0x4d19bd78dfc973d!2sSalsa%20Roots%20Academy!5e0!3m2!1ses-419!2snl!4v1742140146752!5m2!1ses-419!2snl"
              width="100%"
              height="100"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="mx-auto flex flex-col justify-around items-center p-2">
        <p className="text-sm">
          💃 Dancing connects people! No matter if you&apos;re new or experienced, everyone is
          welcome to join the rhythm! Let&apos;s move, learn, and grow together.
        </p>
      </div>
    </footer>
  );
}
