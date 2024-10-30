"use client";

import { useState, useEffect } from "react";
import { BsGrid } from "react-icons/bs";
import {
  animate,
  animateMobile,
  exit,
  exitMobile,
  initial,
  initialMobile,
  transition,
} from "@/lib/utils";

import { m, AnimatePresence, domAnimation, LazyMotion } from "framer-motion";
import { IoMdClose } from "react-icons/io";
import { ConnectMedia } from "./ConnectMedia";
import { Menu } from "./Menu";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => setIsOpen(false);
  const onOpen = () => setIsOpen(true);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <LazyMotion features={domAnimation}>
      <m.button
        className="p-2"
        onClick={onOpen}
        title="Open menu"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        <BsGrid />
      </m.button>

      <AnimatePresence>
        {isOpen && (
          <m.div
            className={`fixed inset-x-0 top-0 z-50 min-h-screen backdrop-blur-md`}
            initial={initialMobile}
            animate={animateMobile}
            exit={exitMobile}
          >
            <header className="z-10 flex items-center justify-between border-b border-b-brand-light p-6">
              <ConnectMedia />
              <button
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center"
              >
                <IoMdClose size="24" />
              </button>
            </header>
            <div className="px-6 py-10">
              <Menu onClick={onClose} />
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </LazyMotion>
  );
}
