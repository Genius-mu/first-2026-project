"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full h-[5em] flex justify-center items-center border-b border-gray-100">
      <div className="w-[90%] h-full flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-2xl font-bold text-red-600">zeeHomes</h2>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-x-6 justify-center items-center">
          <Link
            href="/"
            className="text-black/90 text-[15px] transition duration-300 hover:text-red-600"
          >
            Browse
          </Link>
          <Link
            href="/"
            className="text-black/90 text-[15px] transition duration-300 hover:text-red-600"
          >
            Resources
          </Link>
          <Link
            href="/"
            className="text-black/90 text-[15px] transition duration-300 hover:text-red-600"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="text-black/90 text-[15px] transition duration-300 hover:text-red-600"
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex gap-x-4 justify-center items-center">
          <Link
            href="/"
            className="text-black/90 text-[15px] transition duration-300 hover:text-red-600"
          >
            Log In
          </Link>
          <Link
            href="/"
            className="text-white text-[15px] bg-red-600 transition duration-300 hover:bg-red-500 py-1.5 px-5 rounded"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center text-black/80 focus:outline-none"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[5em] left-0 w-full bg-white shadow-md border-t border-gray-100 md:hidden animate-fadeIn">
          <nav className="flex flex-col items-center gap-4 py-5">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black/90 text-[15px] hover:text-red-600 transition"
            >
              Browse
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black/90 text-[15px] hover:text-red-600 transition"
            >
              Resources
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black/90 text-[15px] hover:text-red-600 transition"
            >
              About Us
            </Link>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-black/90 text-[15px] hover:text-red-600 transition"
            >
              Contact
            </Link>
            <div className="flex flex-col items-center gap-3 mt-4">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-black/90 text-[15px] hover:text-red-600 transition"
              >
                Log In
              </Link>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-white text-[15px] bg-red-600 hover:bg-red-500 py-1.5 px-6 rounded transition"
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
