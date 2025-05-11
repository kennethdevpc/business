'use client'; // This tells Next.js that this component should be rendered on the client-side.

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    // <header className="border-b border-dashed py-4 px-4 absolute z-40 inline-block w-full top-5 md:top-10 px-20">
    <header className="py-4 px-20 absolute z-40 inline-block w-full top-5 md:top-10 ">
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
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="text-2xl">
              {isMenuOpen ? 'X' : '☰'}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4  mt-4 border-t fixed right-10  bg-quinary-custom bg-opacity-50 p-10 w-30">
          <a href="#about" className="hover:text-orange-500">
            About Us
          </a>
          <a href="#plans" className="hover:text-orange-500">
            Plans & Pricing
          </a>
          <a href="#schedule" className="hover:text-orange-500">
            Schedule
          </a>
          <a href="#contact" className="hover:text-orange-500">
            Contact
          </a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Subscribe</button>
        </div>
      )}
    </header>
  );
}
