import { useState, useEffect } from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-secondary ${
        scrolled ? 'text-gray-600' : 'text-black'
      }`}
    >
      {children}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-secondary transition-all duration-300 group-hover:w-full" />
    </a>
  );

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-yellow-300/95 backdrop-blur-sm shadow-md' : 'bg-white'
    }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Himanko Boruah"
              width={160}
              height={40}
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#certifications">Certifications</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <XIcon className={`h-6 w-6 ${scrolled ? 'text-gray-600' : 'text-black'}`} />
            ) : (
              <MenuIcon className={`h-6 w-6 ${scrolled ? 'text-gray-600' : 'text-black'}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-300`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#certifications">Certifications</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}