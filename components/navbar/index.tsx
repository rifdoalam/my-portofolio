import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="w-screen md:flex justify-between items-center px-[15px] md:px-[80px] py-[30px] z-10 fixed">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="text-[24px] font-bold">
            R.
          </Link>
          <button className="block md:hidden" onClick={() => setIsOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 h-10">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex list-none text-[16px] text-[#D9D9D9]">
          <li className="pl-10">
            <Link
              className={` ${pathname == "/about" ? "border-b-2" : "nav-link"}`}
              href={"about"}>
              About me
            </Link>
          </li>
          <li className="pl-10">
            <Link
              className={` ${
                pathname == "/portofolio" ? "border-b-2" : "nav-link"
              }`}
              href={"portofolio"}>
              Portofolio
            </Link>
          </li>
          <li className="pl-10">
            <Link
              className={` ${
                pathname == "/contact" ? "border-b-2" : "nav-link"
              }`}
              href={"contact"}>
              Contact
            </Link>
          </li>
        </div>
      </nav>
      {isOpen && (
        <motion.div className="md:hidden w-screen h-screen items-center bg-[#262626] overflow-hidden absolute z-20">
          <div className="flex items-center justify-between px-[15px] pt-9">
            <Link href={"/"} className="text-[34px] font-bold">
              R.
            </Link>
            <button
              className="block md:hidden"
              onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center mt-[-80px]">
            <ul>
              <li className="text-[50px] p-3">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="text-[50px] p-3">
                <Link href={"about"}>About</Link>
              </li>
              <li className="text-[50px] p-3">
                <Link href={"portofolio"}>Portofolio</Link>
              </li>
              <li className="text-[50px] p-3">
                <Link href={"contact"}>Contact</Link>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </>
  );
}
