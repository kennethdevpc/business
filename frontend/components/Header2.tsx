'use client'; // This tells Next.js that this component should be rendered on the client-side.

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { itemsNavbar } from '@/app/text';

export function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isHovered, setIsHovered] = useState(0);
  const router = usePathname(); //---permite obtener la ruta actual en la que se encuentra el usuario

  return (
    <header className="fixed z-40 w-full md:top-0">
      {/* Contenedor principal con fondo */}
      <div className="bg-secondary/80 py-5 px-4 md:px-20 relative">
        {/* Contenido del header */}
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
            <h1 className="text-xl font-bold px-2">Salsaroots</h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="border-dashed">Subscribe</button>
            <Link href="https://www.instagram.com/salsarootsacademy/" className="text-sm">
              IG
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-4">
              <Link href="/aboutUs" className="hover:text-orange-500">
                About Us
              </Link>
              <Link href="/plans" className="hover:text-orange-500">
                Plans & Pricing
              </Link>
              <Link href="/schedule" className="hover:text-orange-500">
                Schedule
              </Link>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </div>

            {/* Mobile Menu */}
            <div className="lg:hidden flex items-center relative">
              <button onClick={toggleMenu} className="text-2xl">
                {isMenuOpen ? (
                  <div className="bg-octonary/80 w-5 h-6 rounded-t-lg flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                    <span className="font-bold text-white">x</span>
                  </div>
                ) : (
                  '☰'
                )}
              </button>
              {isMenuOpen && (
                <div className="absolute top-full right-0 mt-0 flex flex-col items-center gap-4 border-t bg-nonary bg-opacity-50 p-3 w-40 rounded-tl-lg rounded-b-lg shadow-lg shadow-secondary/20 z-20">
                  {itemsNavbar.map((item) => (
                    <Link
                      key={item.id}
                      href={item.link}
                      onMouseEnter={() => setIsHovered(item.id)}
                      onMouseLeave={() => setIsHovered(0)}
                      className={`${
                        isHovered === item.id ? 'text-orange-500' : ''
                      } hover:text-orange-500 ${
                        router === item.link ? 'bg-darkBG' : ''
                      } mx-auto px-5 rounded`}
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
      </div>

      {/* Efecto de degradado separado (fuera del contenedor principal) */}
      <div className="header-gradient"></div>

      {/* Estilos para el degradado */}
      <style jsx>{`
        .header-gradient {
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px; /* Ajusta este valor para controlar dónde comienza el degradado */
          height: 10px; /* Altura del degradado */
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
