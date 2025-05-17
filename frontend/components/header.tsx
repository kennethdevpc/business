'use client'; // This tells Next.js that this component should be rendered on the client-side.

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { itemsNavbar } from '@/app/text';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isHovered, setIsHovered] = useState(0);
  const router = usePathname(); //---permite obtener la ruta actual en la que se encuentra el usuario

  return (
    // <header className="border-b border-dashed py-4 px-4 absolute z-40 inline-block w-full top-5 md:top-10 px-20">
    <header className="fixed bg-secondary/90 py-1 px-20 absolute z-40 inline-block w-full py-7 md:top-0 ">
      <div className="mx-auto flex justify-around items-center">
        <div className="flex items-center gap-3">
          <Link href="/" className="relative w-10 h-10 ">
            <Image
              src={'/salsaroots1.png'}
              alt="Salsaroots"
              fill
              className="rounded-full object-cover"
            />
          </Link>
          <h1 className="text-2xl font-bold px-2">Salsaroots</h1>
        </div>
        <div className="flex items-center gap-2">
          <button className="border-dashed">Subscribe</button>
          <Link href="https://www.instagram.com/salsarootsacademy/" className="text-sm">
            IG
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4 text-xl">
            <Link href="/aboutUs" className="hover:text-quaternary">
              About Us
            </Link>
            <Link href="/plans" className="hover:text-quaternary">
              Plans & Pricing
            </Link>
            <Link href="/schedule" className="hover:text-quaternary">
              Schedule
            </Link>
            <Link href="/contact" className="hover:text-quaternary">
              Contact
            </Link>
          </div>

          {/* Mobile Menu */}

          <div className="lg:hidden flex items-center relative">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? (
                <div className="  bg-octonary/80 w-5 h-6 rounded-t-lg flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                  <span className="font-bold text-white">x</span>
                </div>
              ) : (
                '☰'
              )}
            </button>
            {isMenuOpen && (
              <div className="absolute top-full right-0 mt-0 flex flex-col items-center gap-2 text-center border-t bg-nonary bg-opacity-50 p-3 w-40 rounded-tl-lg rounded-b-lg shadow-lg shadow-secondary/20 z-20">
                {itemsNavbar.map((item) => (
                  <Link
                    key={item.id}
                    href={item.link}
                    onMouseEnter={() => setIsHovered(item.id)}
                    onMouseLeave={() => setIsHovered(0)}
                    className={`${
                      isHovered === item.id ? 'text-quaternary' : ''
                    } hover:text-quaternary ${
                      router === item.link ? 'bg-darkBG' : ''
                    } mx-auto  rounded w-full py-2 px-1`}
                  >
                    {item.title}
                  </Link>
                ))}

                <a
                  href="https://wa.link/yuij7m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-2 rounded text-center"
                >
                  Subscribe
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {/* Efecto de degradado separado (fuera del contenedor principal) */}
      <div className="header-gradient"></div>

      {/* Estilos para el degradado */}
      <style jsx>{`
        .header-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -40px; /* Ajusta este valor para controlar dónde comienza el degradado */
          height: 40px; /* Altura del degradado */
          background: linear-gradient(
            to bottom,
            var(--color-secondary, #f5741c) 0%,
            transparent 100%
          );
          opacity: 0.8;
          z-index: -1;
        }
      `}</style>
    </header>
  );
}
