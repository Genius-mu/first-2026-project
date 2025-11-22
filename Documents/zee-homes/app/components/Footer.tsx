import { Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-white w-full h-fit py-[5%] flex justify-center items-center">
        <div className="w-[90%] h-full flex-wrap md:flex-nowrap gap-y-7 flex justify-center gap-x-19 items-center">
          <div className="flex flex-col gap-y-4">
            <h2 className="text-2xl font-bold">zeeHomes</h2>
            <p>Connecting home buyers, sellers, and recruiters...</p>
            <nav className="flex gap-x-4 items-center">
              <a
                href="https://x.com/mustaphAdegbite"
                className="transition-all duration-300 ease-in-out"
                target="_blank"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1900 1227"
                  className="sm:w-6 sm:h-6 hover:text-black text-red-500"
                >
                  <path d="M714 519L1161 0h-109L671 420 426 0H0l464 726L0 1226h109l417-463 262 463h426z" />
                </svg>
              </a>
              <a
                href="https://github.com/Genius-mu"
                className="transition-all duration-300 ease-in-out hover:text-black text-red-500"
                target="_blank"
              >
                <Github className="sm:w-6 sm:h-6" size={10} />
              </a>
              <a
                href="https://www.linkedin.com/in/mustaphaadegbite/"
                className="transition-all duration-300 hover:text-black text-red-500 ease-in-out"
                target="_blank"
              >
                <Linkedin className="sm:w-6 sm:h-6" size={10} />
              </a>
              <a
                href="https://www.instagram.com/genius_mu01/"
                className="hover:text-black text-red-500 rounded transition-all duration-300 ease-in-out hover:bg-[#f1f1f1]/30 hover:backdrop-blur-2xl"
              >
                <Instagram className="sm:w-6 sm:h-6" size={10} />
              </a>
            </nav>
          </div>
          <div className="w-full flex-wrap md:flex-nowrap gap-y-6 h-full flex justify-between">
            <nav className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold">Quick Links</h2>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Browse Home
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Rent a Home
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                List Property
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                How it Works
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Help Center
              </Link>
            </nav>

            <nav className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold">Resourcs</h2>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Blog
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                FAQ
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Pricing
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Insights
              </Link>
            </nav>

            <nav className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold">About</h2>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Company
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Careers
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Contact
              </Link>
            </nav>

            <nav className="flex flex-col gap-y-4">
              <h2 className="text-xl font-semibold">Legal</h2>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Terms
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href=""
                className="text-[16px] hover:text-red-600 text-black/80 transition duration-300"
              >
                Cookie Policy
              </Link>
            </nav>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
