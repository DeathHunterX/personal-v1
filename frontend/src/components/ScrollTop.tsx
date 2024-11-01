"use client";

import Link from "next/link";
import { useScrollTo } from "@/hooks/useScrollTo";
import { IoIosArrowDropup } from "react-icons/io";
import { useEffect, useState } from "react";

export function ScrollTop() {
  const { scrollToEl } = useScrollTo();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(window.scrollY > 500);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={`fixed bottom-8 right-8 ${isVisible ? "block" : "hidden"}`}>
      <Link
        href="#intro"
        onClick={(e) => scrollToEl(e)}
        aria-label="Scroll to top"
        className="group relative flex"
      >
        <IoIosArrowDropup size={28} />
        <span
          className="absolute bottom-5 left-1/3 w-max -translate-x-1/2 -translate-y-1/3 rounded-md bg-gray-800
    p-2 text-sm text-gray-100 opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100"
        >
          Scroll to top
        </span>
      </Link>
    </div>
  );
}
