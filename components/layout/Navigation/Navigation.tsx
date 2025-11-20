"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about" },
  { name: "Portfolio", href: "/works" },
  { name: "Contact us", href: "/contact" },
];

type NavigationProps = {
  theme?: "dark" | "light";
};

export function Navigation({ theme = "dark" }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const textColor = theme === "dark" ? "text-gray-50" : "text-gray-500";
  const hoverColor =
    theme === "dark" ? "hover:text-gray-300" : "hover:text-gray-600";
  const mobileBg = theme === "dark" ? "bg-[#0d0d0d]/95" : "bg-white/95";
  const logoSrc =
    theme === "dark" ? "/images/logo-stl-light.svg" : "/images/logo-stl-dark.svg";

  const handleLogoClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (pathname === "/") {
      e.preventDefault();
      return;
    }
    router.push("/");
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative top-0 left-0 w-full z-50"
    >
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 md:px-16 py-6 md:py-8">
        <a href="/" onClick={handleLogoClick} className="flex items-center">
          <Image
            src={logoSrc}
            alt="Logo"
            width={100}
            height={100}
            className="object-contain"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`${isActive && item.name !== "Home" ? 'text-[#4D143D] font-semibold' : textColor} ${!isActive ? hoverColor : ''} text-base transition-colors`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Hamburger / Cross */}
        <button
          className={`${textColor} md:hidden focus:outline-none`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={isOpen ? "close" : "open"}
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="inline-flex"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`${mobileBg} backdrop-blur-md md:hidden fixed inset-0 z-40`}
          >
            <div className="flex flex-col h-full pt-24 px-6">
              <nav className="flex flex-col gap-4">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={`${isActive ? 'text-[#4D143D] font-semibold' : textColor} ${!isActive ? hoverColor : ''} text-lg font-medium transition-colors py-2 border-b border-white/5 text-left`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto pb-8 text-sm text-gray-500">
                {/* e.g., <p>© {new Date().getFullYear()} Your Company</p> */}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
