"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // Modern icons for the menu toggle

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-20 py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo/logo.webp"
            alt="Bird Logo"
            width={160}
            height={160}
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10 text-gray-800 font-medium text-lg">
          {[
            { name: "Home", path: "/" },
            { name: "Showcase", path: "/showcase" },
            { name: "Blog", path: "/blogs" }, // ✅ Fixed Blog Link
          ].map((item) => (
            <Link key={item.path} href={item.path} className="relative group">
              {item.name}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
            </Link>
          ))}

          {/* Phone Call Button */}
          <a
            href="tel:+447861195631"
            className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
          >
            (+44) 7861 195631
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-gray-800"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu (Animated Slide Down) */}
      <nav
        className={`md:hidden bg-white shadow-md absolute top-16 left-0 w-full z-50 transition-all ${
          isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
        } origin-top`}
      >
        <ul className="flex flex-col items-center space-y-6 py-6 text-gray-800 text-lg font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "Showcase", path: "/showcase" },
            { name: "Blog", path: "/blogs" }, // ✅ Fixed Blog Link
          ].map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className="hover:text-blue-500"
              >
                {item.name}
              </Link>
            </li>
          ))}

          <li>
            <a
              href="tel:+447861195631"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition"
            >
              (+44) 7861 195631
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
