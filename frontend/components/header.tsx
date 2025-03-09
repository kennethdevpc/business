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
    <header className="border-b border-dashed py-4 px-4">
      <div className="mx-auto flex justify-around items-center">
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10">
            <Image
              src="https://scontent-ams2-1.xx.fbcdn.net/v/t39.30808-6/461710813_122110759160522541_8063983386846588582_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=rTS6Q8jnwAAQ7kNvgHCRqoa&_nc_oc=AdgaoFhI8xVdhbbUkq2vAwvhoXjkc5-M3_dXlcmVfcCWt2FWWpaqgKMjdsLTI5VUUlg&_nc_zt=23&_nc_ht=scontent-ams2-1.xx&_nc_gid=AQ8fIUyHF1TznarfVE9ikpb&oh=00_AYBFFe1fnpk1ZxOt6lb50RRSjy4zrhL21oU-pMYFLniKcw&oe=67CA6245"
              alt="Salsaroots"
              fill
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-xl font-bold ">Salsaroots</h1>
        </div>
        <div className="flex items-center gap-4">
          <button className="border-dashed">Subscribe</button>
          <Link href="https://instagram.com" className="text-sm">
            IG
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-4">
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
