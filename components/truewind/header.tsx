"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navItems = [
  {
    title: "Company",
    url: "#",
  },
  {
    title: "Product",
    url: "#",
  },
  {
    title: "Service",
    url: "#",
  },
  {
    title: "Solutions",
    url: "#",
  },
  {
    title: "Resources",
    url: "#",
  },
  {
    title: "Careers",
    url: "#",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = (isOpen: boolean) => {
    setIsOpen(isOpen);
  };

  return (
    <header className="bg-white shadow">
      <div className="overflow-hidden">
        <div className="px-6 py-5 flex justify-between items-center">
          <div>
            <Image
              src="/truewind/truewind-logo.webp"
              alt="Logo"
              width={120}
              height={120}
            />
          </div>
          <button
            onClick={() => toggleNavbar(!isOpen)}
            className={clsx(
              "p-2 rounded-md transition duration-300",
              isOpen ? "bg-zinc-900 text-white" : "bg-transparent"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </button>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <ul className="flex flex-col justify-center items-center gap-y-6 p-8">
                {navItems.map((item) => (
                  <li key={item.title}>
                    <Link
                      href={item.url}
                      className="text-sm text-zinc-800 font-medium"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
                <Link
                  href="#"
                  className="bg-[#ffc220] text-zinc-900 px-8 py-3 rounded-full font-medium mt-4"
                >
                  Book a Demo
                </Link>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
